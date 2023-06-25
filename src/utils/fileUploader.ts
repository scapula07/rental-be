import { v2 as cloudinary } from "cloudinary";
import config from "../config";
import logger from "./logger";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
  secure: true,
});

export const fileUploader = async (file: any) => {
  try {
    const result = await cloudinary.uploader.upload(file.path);
    return result;
  } catch (error) {
    logger.error(error);
  }
};
