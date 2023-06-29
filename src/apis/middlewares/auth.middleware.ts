import { Request, Response, NextFunction } from "express";
import logger from "../../utils/logger";
import HttpException from "../../exception/HttpException";
import { verifyJwt } from "../../utils/jwt";

export default function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  console.log("authHeader", authHeader);

  if (!authHeader) {
    logger.warn("No authorization header");
    throw new HttpException(401, "No authorization header");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    logger.warn("No token provided");
    throw new HttpException(401, "No token provided");
  }
  const payload = verifyJwt(token);
  if (!payload) {
    logger.warn("Invalid token");
    throw new HttpException(401, "Invalid token");
  }

  next();
}
