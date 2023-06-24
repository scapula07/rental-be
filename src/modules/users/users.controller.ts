import { Request, Response, NextFunction } from "express";
import UsersService from "./users.services";
import HttpException from "../../exception/HttpException";
import InvalidInputException from "../../exception/InvalidInput";
import NotFoundException from "../../exception/NotFound";
import { signJwt } from "../../utils/jwt";
import { matchPassword } from "../../utils/matchPassword";
import { generateShortCode } from "../../utils/generateShortCode";
import { date } from "zod";

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

      const token = signJwt(newUser?._id);

      const data = {
        id: newUser?._id,
        firstname: newUser?.firstname,
        lastname: newUser?.lastname,
        email: newUser?.email,
        phone: newUser?.phone,
        dateOfBirth: newUser?.dateOfBirth,
        address: { ...newUser?.address },
        driverLicense: { ...newUser?.driverLicense },
        insurance: { ...newUser?.insurance },
        role: newUser?.role,
      };

      res
        .status(201)
        .json({ status: "success", message: "user created", data, token });
    } catch (error) {
      console.log(error);
    }
  };

  userLogin = async (req: Request, res: Response, next: NextFunction) => {
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

      const token = signJwt(user?._id);

      const data = {
        id: user?._id,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        phone: user?.phone,
        dateOfBirth: user?.dateOfBirth,
        address: { ...user?.address },
        driverLicense: { ...user?.driverLicense },
        insurance: { ...user?.insurance },
        role: user?.role,
      };

      res
        .status(200)
        .json({ status: "success", message: "user logged in", data, token });
    } catch (error) {
      console.log(error);
    }
  };

  updateData = async (req: Request, res: Response, next: NextFunction) => {
    const { phone, address, id } = req.body;

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
        id: updatedUser?._id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
        role: updatedUser?.role,
      };

      res
        .status(200)
        .json({ status: "success", message: "user updated", data });
    } catch (error) {
      console.log(error);
    }
  };

  uploadDriverLicense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { licenseNumber, expiryDate, issuedDate, licenseClass, id } =
      req.body;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // Extract file and delete previous and upload to cloud

      // update user driver license data
      const updatedUser = await this.usersService.updateUser(id, {
        driverLicense: {
          url: "url",
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
        id: updatedUser?._id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
        role: updatedUser?.role,
      };

      res
        .status(200)
        .json({ status: "success", message: "driver license updated", data });
    } catch (error) {
      console.log(error);
    }
  };

  uploadInsurance = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      // Extract file and delete previous and upload to cloud

      // update user insurance data
      const updatedUser = await this.usersService.updateUser(id, {
        insurance: {
          url: "url",
          uploaded: true,
          approved: false,
        },
      });

      const data = {
        id: updatedUser?._id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
        role: updatedUser?.role,
      };

      res
        .status(200)
        .json({ status: "success", message: "insurance updated", data });
    } catch (error) {
      console.log(error);
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
        id: user?._id,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        phone: user?.phone,
        dateOfBirth: user?.dateOfBirth,
        address: { ...user?.address },
        driverLicense: { ...user?.driverLicense },
        insurance: { ...user?.insurance },
        role: user?.role,
      };

      res.status(200).json({ status: "success", message: "user found", data });
    } catch (error) {
      console.log(error);
    }
  };

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.getAllUsers();

      if (!users) {
        throw next(new NotFoundException("Users not found"));
      }

      const data = [];

      users.forEach((user) => {
        data.push({
          id: user?._id,
          firstname: user?.firstname,
          lastname: user?.lastname,
          email: user?.email,
          phone: user?.phone,
          dateOfBirth: user?.dateOfBirth,
          address: { ...user?.address },
          driverLicense: { ...user?.driverLicense },
          insurance: { ...user?.insurance },
          role: user?.role,
        });
      });

      res
        .status(200)
        .json({ status: "success", message: "users found", data: users });
    } catch (error) {
      console.log(error);
    }
  };

  updatePassword = async (req: Request, res: Response, next: NextFunction) => {
    const { id, oldPassword, newPassword } = req.body;

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
        id: updatedUser?._id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        password: updatedUser?.password,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
        role: updatedUser?.role,
      };

      res
        .status(200)
        .json({ status: "success", message: "Password updated", data });
    } catch (error) {
      console.log(error);
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
        user?._id,
        newPassword
      );

      // send email with new password

      const data = {
        id: updatedUser?._id,
        firstname: updatedUser?.firstname,
        lastname: updatedUser?.lastname,
        email: updatedUser?.email,
        password: updatedUser?.password,
        phone: updatedUser?.phone,
        dateOfBirth: updatedUser?.dateOfBirth,
        address: { ...updatedUser?.address },
        driverLicense: { ...updatedUser?.driverLicense },
        insurance: { ...updatedUser?.insurance },
        role: updatedUser?.role,
      };

      res.status(200).json({
        status: "success",
        message: "Password updated - Check email for new password",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getUserById(id);

      if (!user) {
        throw next(new NotFoundException("User not found"));
      }

      await this.usersService.deleteUser(id);

      res.status(200).json({ status: "success", message: "User deleted" });
    } catch (error) {
      console.log(error);
    }
  };
}
