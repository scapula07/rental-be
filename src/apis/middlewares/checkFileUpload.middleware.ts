import { Request, Response, NextFunction } from "express";
import InvalidInputException from "../../exception/InvalidInput";
import logger from "../../utils/logger";

const checkFileUpload = (req: Request, res: Response, next: NextFunction) => {
  const files = req.files;
  console.log("files", req.files);
  console.log("files", Object.keys(req.files as Object).length);
  // Check if file is uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    throw next(new InvalidInputException("Please upload a file"));
  }

  // Check if files are greater than 1
  if (Object.keys(req.files).length > 1) {
    throw next(new InvalidInputException("Please upload only one file"));
  }
  // next();
};

export default checkFileUpload;
