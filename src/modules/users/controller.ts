import { Request, Response, NextFunction } from "express";
import UsersService from "./service/users.services";
import HttpException from "../../exception/HttpException";
import InvalidInputException from "../../exception/InvalidInput";
import NotFoundException from "../../exception/NotFound";
import UnAuthorizedException from "../../exception/Unauthorized";
import { signJwt } from "../../utils/jwt";
import { matchPassword } from "../../utils/matchPassword";
import { generateShortCode } from "../../utils/generateShortCode";
import logger from "../../utils/logger";
import { fileUploader, fileDestroyer, folders } from "../../utils/fileUploader";
import { FileArray } from "express-fileupload";

type IUserOutput = {
  id: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  profileImage: {
    publicId: string;
    url: string;
  };
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
  driverLicense?: {
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
  insurance?: {
    publicId: string;
    url: string;
    uploaded: boolean;
    approved: boolean;
  };
};

export default class UsersController {
  usersService = new UsersService();

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
        throw next(new HttpException(409, "Email already exists"));
      }

      const newUser = await this.usersService.createUser({
        firstname,
        lastname,
        email,
        password,
        phone,
        dateOfBirth,
        address,
      });

      console.log(newUser);
      console.log(newUser?.id);

      const token = signJwt(newUser?.id);

      const data = {
        id: newUser?.id,
        firstname: newUser?.firstname,
        lastname: newUser?.lastname,
        email: newUser?.email,
        phone: newUser?.phone,
        dateOfBirth: newUser?.dateOfBirth,
        address: { ...newUser?.address },
        driverLicense: { ...newUser?.driverLicense },
        insurance: { ...newUser?.insurance },
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

      const data = {
        id: user?.id,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        phone: user?.phone,
        dateOfBirth: user?.dateOfBirth,
        profileImage: user?.profileImage,
        address: { ...user?.address },
        driverLicense: { ...user?.driverLicense },
        insurance: { ...user?.insurance },
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

      // Extract file and delete previous and upload to cloud
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      const data = {
        id: user?.id,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        phone: user?.phone,
        dateOfBirth: user?.dateOfBirth,
        profileImage: user?.profileImage,
        address: { ...user?.address },
        driverLicense: { ...user?.driverLicense },
        insurance: { ...user?.insurance },
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
          id: user?.id,
          firstname: user?.firstname,
          lastname: user?.lastname,
          email: user?.email,
          phone: user?.phone,
          dateOfBirth: user?.dateOfBirth,
          profileImage: user?.profileImage,
          address: { ...user?.address },
          driverLicense: { ...user?.driverLicense },
          insurance: { ...user?.insurance },
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

      const data = {
        id: updatedUser?.id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        profileImage: updatedUser?.profileImage,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
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

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      //Check if user is admin
      if (!(user?.roles as Array<String>)?.includes("admin")) {
        throw next(new UnAuthorizedException());
      }

      await this.usersService.deleteUser(id);

      res.status(200).json({ status: "success", message: "User deleted" });
    } catch (error) {
      logger.error(error);
    }
  };
}