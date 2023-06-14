import { Request, Response, NextFunction } from "express";
import logger from "../../utils/logger";
import { verifyJwt } from "../../utils/jwt";

export default function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    logger.warn("No authorization header");
    return res.status(401).json({ message: "No authorization header" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    logger.warn("No token provided");
    return res.status(401).json({ message: "No token provided" });
  }
  const payload = verifyJwt(token);
  if (!payload) {
    logger.warn("Invalid token");
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
}
