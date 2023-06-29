import { Request, Response, NextFunction } from "express";
import InvalidInputException from "../../exception/InvalidInput";
import HttpException from "../../exception/HttpException";

const MB = 1;
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimiter = (req: Request, res: Response, next: NextFunction) => {
  const files = req.files;

  Object.keys(files as Object).forEach((key) => {
    //@ts-ignore
    if (files[key].size > FILE_SIZE_LIMIT) {
      throw new HttpException(413, "file exceeds size limit");
    }
  });

  next();
};
