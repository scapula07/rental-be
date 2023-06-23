import { Request, Response, NextFunction } from "express";
import UsersService from "./users.services";
import HttpException from "../../exception/HttpException";
import InvalidInputException from "../../exception/InvalidInput";
import NotFoundException from "../../exception/NotFound";
import { signJwt } from "../../utils/jwt";
import { matchPassword } from "../../utils/matchPassword";

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
        password: newUser?.password,
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
        password: user?.password,
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
        .json({ status: "success", message: "user updated", data });
    } catch (error) {
      console.log(error);
    }
  };

  uploadDriverLicense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  uploadInsurance = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  updateDriverLicense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  updateInsurance = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

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
        password: user?.password,
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

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {};

  resetPassword = async (req: Request, res: Response, next: NextFunction) => {};

  forgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {};
}
