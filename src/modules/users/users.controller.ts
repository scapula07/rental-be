import { Request, Response, NextFunction } from "express";
import UsersService from "./users.services";
import HttpException from "../../exception/HttpException";
import { signJwt } from "../../utils/jwt";

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

      if (!user) {
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

  login = async (req: Request, res: Response, next: NextFunction) => {};

  updateData = async (req: Request, res: Response, next: NextFunction) => {};

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

  getUser = async (req: Request, res: Response, next: NextFunction) => {};

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {};

  resetPassword = async (req: Request, res: Response, next: NextFunction) => {};

  forgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {};
}
