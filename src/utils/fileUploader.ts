import { FileArray, UploadedFile } from "express-fileupload";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import config from "../config";
import logger from "./logger";
import fileUpload from "express-fileupload";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
  secure: true,
});

interface Ifolder {
  profileImage: string;
  products: string;
  insurance: string;
  driverLicense: string;
  carImage: string;
}

export const folders: Ifolder = {
  profileImage: "profile-image",
  products: "products",
  insurance: "insurance",
  driverLicense: "driver-license",
  carImage: "car-mage",
};

export const fileUploader = async (
  files: FileArray,
  folder: string
): Promise<UploadApiResponse> => {
  const file = Object.keys(files)[0];

  const result = await cloudinary.uploader.upload(
    (files[file] as UploadedFile).tempFilePath,
    {
      folder: folder,
    }
  );

  return result;
};

export const fileDestroyer = async (public_id: string) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return result;
  } catch (error) {
    logger.error(error);
  }
};
