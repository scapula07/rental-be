import { Request, Response, NextFunction } from "express";
import InvalidInputException from "../../exception/InvalidInput";
import logger from "../../utils/logger";

const checkFileUpload = (req: Request, res: Response, next: NextFunction) => {
  // Check if file is uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    logger.warn("Please upload a file");
    throw next(new InvalidInputException("Please upload a file"));
  }

  // Check if files are greater than 1
  if (Object.keys(req.files).length > 1) {
    logger.warn("Please upload only one file");
    throw next(new InvalidInputException("Please upload only one file"));
  }
  next();
};

export default checkFileUpload;
