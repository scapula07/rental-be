import path from "path";
import { Request, Response, NextFunction } from "express";
import HttpException from "../../exception/HttpException";

const fileExtLimiter = (allowedExtArray: any[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files;

    const fileExtensions = [] as any[];

    Object.keys(files as Object).forEach((key) => {
      //@ts-ignore
      fileExtensions.push(path.extname(files[key].name));
    });

    const allowed = fileExtensions.every((ext: any) => {
      return allowedExtArray.includes(ext);
    });

    if (!allowed) {
      throw new HttpException(422, "file type not supported");
    }

    next();
  };
};
