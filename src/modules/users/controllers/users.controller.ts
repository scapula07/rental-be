import { Request, Response, NextFunction } from "express";
import UsersService from "../service/users.services";
import HttpException from "../../../exception/HttpException";
import InvalidInputException from "../../../exception/InvalidInput";
import NotFoundException from "../../../exception/NotFound";
import UnAuthorizedException from "../../../exception/Unauthorized";
import { signJwt } from "../../../utils/jwt";
import { matchPassword } from "../../../utils/matchPassword";
import { generateShortCode } from "../../../utils/generateShortCode";
import { decodeJwt, IJwtPayload } from "../../../utils/jwt";
import logger from "../../../utils/logger";
import {
  fileUploader,
  fileDestroyer,
  folders,
} from "../../../utils/fileUploader";
import { FileArray } from "express-fileupload";

type IUserOutput = {
  id: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  profileImage: IProfileImage;
  address: IAddress;
  driverLicense?: IDriverLicense;
  insurance?: IInsurance;
};

type IProfileImage = {
  publicId: string;
  url: string;
};

type IAddress = {
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: Number;
};

type IDriverLicense = {
  publicId: string;
  url: string;
  details: {
    licenseNumber: string;
    expiryDate: Date;
    issuedDate: Date;
    licenseClass: string;
  };
  uploaded: boolean;
  approved: boolean;
};

type IInsurance = {
  publicId: string;
  url: string;
  uploaded: boolean;
  approved: boolean;
};

export default class UsersController {
  usersService = new UsersService();

  // User Methods
  registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      dateOfBirth,
      address,
    } = req.body;
    try {
      // Check if email already exists
      const user = await this.usersService.getUserByEmail(email);

      if (user) {
        throw next(new HttpException(409, "User with email already exists"));
      }

      const newUser = await this.usersService.createUser({
        firstname,
        lastname,
        email,
        password,
        phone,
        dateOfBirth,
        address,
        role: "user",
      });

      console.log(newUser);
      console.log(newUser?.id);

      const token = signJwt(newUser?.id);

      const data: IUserOutput = {
        id: newUser?.id as string,
        firstname: newUser?.firstname as string,
        lastname: newUser?.lastname as string,
        email: newUser?.email as string,
        phone: newUser?.phone as string,
        dateOfBirth: newUser?.dateOfBirth as Date,
        profileImage: { ...newUser?.profileImage } as IProfileImage,
        address: { ...newUser?.address } as IAddress,
        driverLicense: { ...newUser?.driverLicense } as IDriverLicense,
        insurance: { ...newUser?.insurance } as IInsurance,
      };

      res
        .status(201)
        .json({ status: "success", message: "user created", data, token });
    } catch (error) {
      logger.error(error);
      console.log(error);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
      const user = await this.usersService.getUserByEmail(email);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      const isMatch = await matchPassword(password, user.password);

      if (!isMatch) {
        throw next(new InvalidInputException("Invalid credentials"));
      }

      const token = signJwt(user?.id);

      const data: IUserOutput = {
        id: user?.id as string,
        firstname: user?.firstname as string,
        lastname: user?.lastname as string,
        email: user?.email as string,
        phone: user?.phone as string,
        dateOfBirth: user?.dateOfBirth as Date,
        profileImage: { ...user?.profileImage } as IProfileImage,
        address: { ...user?.address } as IAddress,
        driverLicense: { ...user?.driverLicense } as IDriverLicense,
        insurance: { ...user?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "user logged in", data, token });
    } catch (error) {
      logger.error(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { phone, address } = req.body;
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      const updatedUser = await this.usersService.updateUser(id, {
        phone,
        address,
      });

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "user updated", data });
    } catch (error) {
      logger.error(error);
    }
  };

  updateProfileImage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // Check if file is uploaded
      if (user?.profileImage.publicId) {
        // Delete file from cloud
        await fileDestroyer(user?.profileImage.publicId);
      }

      // Extract file and delete previous and upload to cloud
      const { public_id, secure_url } = await fileUploader(
        req.files as FileArray,
        folders.profileImage // folder to upload to
      );

      // update user insurance data
      const updatedUser = await this.usersService.updateUser(id, {
        profileImage: {
          publicId: public_id,
          url: secure_url,
        },
      });

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "profile image updated", data });
    } catch (error) {
      logger.error(error);
      // console.log(error);
    }
  };

  uploadDriverLicense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { licenseNumber, expiryDate, issuedDate, licenseClass } = req.body;
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // Check if file is uploaded
      if (user?.driverLicense.publicId) {
        // Delete file from cloud
        await fileDestroyer(user?.insurance.publicId);
      }

      // Extract file and upload to cloud
      const { public_id, secure_url } = await fileUploader(
        req.files as FileArray,
        folders.driverLicense
      );

      // update user driver license data
      const updatedUser = await this.usersService.updateUser(id, {
        driverLicense: {
          publicId: public_id,
          url: secure_url,
          details: {
            licenseNumber,
            expiryDate: new Date(expiryDate),
            issuedDate: new Date(issuedDate),
            licenseClass,
          },
          uploaded: true,
          approved: false,
        },
      });

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "driver license updated", data });
    } catch (error) {
      logger.error(error);
    }
  };

  uploadInsurance = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // Check if file is uploaded
      if (user?.insurance.publicId) {
        // Delete file from cloud
        await fileDestroyer(user?.insurance.publicId);
      }

      // Extract file and delete previous and upload to cloud
      const { public_id, secure_url } = await fileUploader(
        req.files as FileArray,
        folders.insurance // folder to upload to
      );

      // update user insurance data
      const updatedUser = await this.usersService.updateUser(id, {
        insurance: {
          publicId: public_id,
          url: secure_url,
          uploaded: true,
          approved: false,
        },
      });

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "insurance updated", data });
    } catch (error) {
      logger.error(error);
      // console.log(error);
    }
  };

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const token = req.headers["authorization"]?.split(" ")[1];

    const decodedToken = await decodeJwt(token as string);

    if (!decodedToken) {
      throw next(new UnAuthorizedException());
    }

    console.log("decoded token: ", decodedToken);

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      const data: IUserOutput = {
        id: user?.id as string,
        firstname: user?.firstname as string,
        lastname: user?.lastname as string,
        email: user?.email as string,
        phone: user?.phone as string,
        dateOfBirth: user?.dateOfBirth as Date,
        profileImage: { ...user?.profileImage } as IProfileImage,
        address: { ...user?.address } as IAddress,
        driverLicense: { ...user?.driverLicense } as IDriverLicense,
        insurance: { ...user?.insurance } as IInsurance,
      };

      res.status(200).json({ status: "success", message: "user found", data });
    } catch (error) {
      logger.error(error);
    }
  };

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getAllUsers();

      if (users?.length === 0) {
        throw next(new NotFoundException("Users not found"));
      }

      const data: IUserOutput[] = [];

      users?.forEach((user) => {
        data.push({
          id: user?.id as string,
          firstname: user?.firstname as string,
          lastname: user?.lastname as string,
          email: user?.email as string,
          phone: user?.phone as string,
          dateOfBirth: user?.dateOfBirth as Date,
          profileImage: { ...user?.profileImage } as IProfileImage,
          address: { ...user?.address } as IAddress,
          driverLicense: { ...user?.driverLicense } as IDriverLicense,
          insurance: { ...user?.insurance } as IInsurance,
        });
      });

      res
        .status(200)
        .json({ status: "success", message: "users found", data: data });
    } catch (error) {
      logger.error(error);
    }
  };

  updatePassword = async (req: Request, res: Response, next: NextFunction) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      const isMatch = await matchPassword(oldPassword, user.password);

      if (!isMatch) {
        throw next(new InvalidInputException("Invalid credentials"));
      }

      // Update password with new password
      const updatedUser = await this.usersService.updatePassword(
        id,
        newPassword
      );

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res
        .status(200)
        .json({ status: "success", message: "Password updated", data });
    } catch (error) {
      logger.error(error);
    }
  };

  forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    try {
      const user = await this.usersService.getUserByEmail(email);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // generate new password
      const newPassword = generateShortCode();

      // update user with new password
      const updatedUser = await this.usersService.updatePassword(
        user?.id,
        newPassword
      );

      // send email with new password

      const data: IUserOutput = {
        id: updatedUser?.id as string,
        firstname: updatedUser?.firstname as string,
        lastname: updatedUser?.lastname as string,
        email: updatedUser?.email as string,
        phone: updatedUser?.phone as string,
        dateOfBirth: updatedUser?.dateOfBirth as Date,
        profileImage: { ...updatedUser?.profileImage } as IProfileImage,
        address: { ...updatedUser?.address } as IAddress,
        driverLicense: { ...updatedUser?.driverLicense } as IDriverLicense,
        insurance: { ...updatedUser?.insurance } as IInsurance,
      };

      res.status(200).json({
        status: "success",
        message: "Password updated - Check email for new password",
        data,
      });
    } catch (error) {
      logger.error(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const token = req.headers["authorization"]?.split(" ")[1];

    try {
      // Decode token
      const decodedToken: IJwtPayload | null = await decodeJwt(token as string);

      if (!decodedToken) {
        throw next(new UnAuthorizedException());
      }

      // Check if user calling the method is admin
      if (
        !(decodedToken?.payload as any)?.roles?.includes(
          "admin" || "super-admin"
        )
      ) {
        throw next(new UnAuthorizedException());
      }

      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      //Check if user is admin
      if (!(user?.roles as Array<String>)?.includes("admin" || "super-admin")) {
        throw next(new UnAuthorizedException());
      }

      await this.usersService.deleteUser(id);

      res.status(200).json({ status: "success", message: "User deleted" });
    } catch (error) {
      logger.error(error);
    }
  };

  // Customer Methods
  getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getUserByRole("user");

      if (users?.length === 0) {
        throw next(new NotFoundException("Customers not found"));
      }

      const data: IUserOutput[] = [];

      users?.forEach((user) => {
        data.push({
          id: user?.id as string,
          firstname: user?.firstname as string,
          lastname: user?.lastname as string,
          email: user?.email as string,
          phone: user?.phone as string,
          dateOfBirth: user?.dateOfBirth as Date,
          profileImage: { ...user?.profileImage } as IProfileImage,
          address: { ...user?.address } as IAddress,
          driverLicense: { ...user?.driverLicense } as IDriverLicense,
          insurance: { ...user?.insurance } as IInsurance,
        });
      });

      res
        .status(200)
        .json({ status: "success", message: "customers found", data: data });
    } catch (error) {
      logger.error(error);
    }
  };

  // Partner Methods
  registerPartner = async (req: Request, res: Response, next: NextFunction) => {
    const { firstname, lastname, email, password, phone, address } = req.body;

    try {
      // Check if email already exists
      const user = await this.usersService.getUserByEmail(email);
      let data: IUserOutput;
      let token: string;

      if (user) {
        throw next(new HttpException(409, "User with email already exists"));
      }

      const newUser = await this.usersService.createUser({
        firstname,
        lastname,
        email,
        password,
        phone,
        address,
        role: "partner",
      });

      token = signJwt(newUser?.id);

      data = {
        id: newUser?.id as string,
        firstname: newUser?.firstname as string,
        lastname: newUser?.lastname as string,
        email: newUser?.email as string,
        phone: newUser?.phone as string,
        dateOfBirth: newUser?.dateOfBirth as Date,
        profileImage: { ...newUser?.profileImage } as IProfileImage,
        address: { ...newUser?.address } as IAddress,
        driverLicense: { ...newUser?.driverLicense } as IDriverLicense,
        insurance: { ...newUser?.insurance } as IInsurance,
      };

      res
        .status(201)
        .json({ status: "success", message: "partner created", data, token });
    } catch (error) {
      logger.error(error);
      console.log(error);
    }
  };

  getAllPartners = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getUserByRole("partner");

      if (users?.length === 0) {
        throw next(new NotFoundException("Partners not found"));
      }

      const data: IUserOutput[] = [];

      users?.forEach((user) => {
        data.push({
          id: user?.id as string,
          firstname: user?.firstname as string,
          lastname: user?.lastname as string,
          email: user?.email as string,
          phone: user?.phone as string,
          dateOfBirth: user?.dateOfBirth as Date,
          profileImage: { ...user?.profileImage } as IProfileImage,
          address: { ...user?.address } as IAddress,
          driverLicense: { ...user?.driverLicense } as IDriverLicense,
          insurance: { ...user?.insurance } as IInsurance,
        });
      });

      res
        .status(200)
        .json({ status: "success", message: "partners found", data: data });
    } catch (error) {
      logger.error(error);
    }
  };

  // Admin Methods
  registerAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { firstname, lastname, email, password } = req.body;
    const authToken = req.headers["authorization"]?.split(" ")[1];

    try {
      // Decode token
      const decodedToken: IJwtPayload | null = await decodeJwt(
        authToken as string
      );

      if (!decodedToken) {
        throw next(new UnAuthorizedException());
      }

      // Check if user calling the method is super-admin
      if (!(decodedToken?.payload as any)?.roles?.includes("super-admin")) {
        throw next(new UnAuthorizedException());
      }

      // Check if email already exists
      const user = await this.usersService.getUserByEmail(email);
      let data: IUserOutput;
      let token: string;

      if (user) {
        throw next(new HttpException(409, "User with email already exists"));
      }

      const newUser = await this.usersService.createUser({
        firstname,
        lastname,
        email,
        password,
        role: "admin",
      });

      token = signJwt(newUser?.id);

      data = {
        id: newUser?.id as string,
        firstname: newUser?.firstname as string,
        lastname: newUser?.lastname as string,
        email: newUser?.email as string,
        phone: newUser?.phone as string,
        dateOfBirth: newUser?.dateOfBirth as Date,
        profileImage: { ...newUser?.profileImage } as IProfileImage,
        address: { ...newUser?.address } as IAddress,
        driverLicense: { ...newUser?.driverLicense } as IDriverLicense,
        insurance: { ...newUser?.insurance } as IInsurance,
      };

      res
        .status(201)
        .json({ status: "success", message: "admin created", data, token });
    } catch (error) {
      logger.error(error);
      console.log(error);
    }
  };

  getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers["authorization"]?.split(" ")[1];

    try {
      // Decode token
      const decodedToken: IJwtPayload | null = await decodeJwt(
        authToken as string
      );

      if (!decodedToken) {
        throw next(new UnAuthorizedException());
      }

      // Check if user calling the method is super-admin
      if (!(decodedToken?.payload as any)?.roles?.includes("super-admin")) {
        throw next(new UnAuthorizedException());
      }

      const users = await this.usersService.getUserByRole("admin");

      if (users?.length === 0) {
        throw next(new NotFoundException("Admins not found"));
      }

      const data: IUserOutput[] = [];

      users?.forEach((user) => {
        data.push({
          id: user?.id as string,
          firstname: user?.firstname as string,
          lastname: user?.lastname as string,
          email: user?.email as string,
          phone: user?.phone as string,
          dateOfBirth: user?.dateOfBirth as Date,
          profileImage: { ...user?.profileImage } as IProfileImage,
          address: { ...user?.address } as IAddress,
          driverLicense: { ...user?.driverLicense } as IDriverLicense,
          insurance: { ...user?.insurance } as IInsurance,
        });
      });

      res
        .status(200)
        .json({ status: "success", message: "admins found", data: data });
    } catch (error) {
      logger.error(error);
    }
  };
}
