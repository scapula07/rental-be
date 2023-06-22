import { Request, Response, NextFunction } from "express";
import UsersService from "./users.services";

export default class UsersController {
  usersService = new UsersService();

  register = async (req: Request, res: Response, next: NextFunction) => {};

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
