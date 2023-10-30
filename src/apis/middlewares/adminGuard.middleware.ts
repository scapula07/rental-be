import { Request, Response, NextFunction } from "express";
import logger from "../../utils/logger";
import HttpException from "../../exception/HttpException";
import UnAuthorizedException from "../../exception/Unauthorized";
import { verifyJwt, decodeJwt, IJwtPayload } from "../../utils/jwt";

import UsersService from "../../modules/users/service/users.service";

export async function adminGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader!.split(" ")[1];

  const userService = new UsersService();

  // Decode token
  const decodedToken: IJwtPayload | null = decodeJwt(token as string);

  if (!decodedToken) {
    throw next(new UnAuthorizedException());
  }

  
  const user = await userService.getUserById(decodedToken.payload);

  // Check if user calling the method is admin
  //@ts-ignore
  if (!user.roles.includes("admin" || "super-admin")) {
    throw next(new UnAuthorizedException());
  }

  next();
}
export async function superAdminGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader!.split(" ")[1];

  const userService = new UsersService();

  // Decode token
  const decodedToken: IJwtPayload | null = decodeJwt(token as string);

  if (!decodedToken) {
    throw next(new UnAuthorizedException());
  }

  // fetch user from using id from decoded token
  const user = await userService.getUserById(decodedToken.payload);

  // Check if user calling the method is superAdmin
  //@ts-ignore
  if (!user.roles.includes("super-admin")) {
    throw next(new UnAuthorizedException());
  }

  next();
}
