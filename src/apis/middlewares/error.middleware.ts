import { NextFunction, Request, Response } from "express";
import HttpException from "../../exception/HttpException";

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (response.headersSent) {
    return next(error);
  }
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  response.status(status).json({
    status: "error",
    message,
  });
}

export default errorMiddleware;
