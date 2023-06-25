import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "YOUR_CLOUDINARY_CLOUD_NAME",
  api_key: "YOUR_CLOUDINARY_API_KEY",
  api_secret: "YOUR_CLOUDINARY_API_SECRET",
  secure: true,
});

export const fileUploader = async (file: any) => {
  try {
    const result = await cloudinary.uploader.upload(file.path);
    return result;
  } catch (error) {
    console.log(error);
  }
};
