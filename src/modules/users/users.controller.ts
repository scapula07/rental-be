import { Request, Response } from "express";
import UsersService from "./users.services";

export default class UsersController {
  usersService = new UsersService();

  register = async (req: Request, res: Response) => {};
}
