import mongoose from "mongoose";

import dotenv from "dotenv";

import config from "../config";

import logger from "../utils/logger";

dotenv.config();

//  remember to replace with appropriate names
let username = config.mongoDb.mongoUser;
let password = config.mongoDb.mongoPass;
let path = config.mongoDb.mongoPath;

const MONGO_URI = `mongodb+srv://${username}:${password}${path}`;

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(MONGO_URI);

    logger.info(`MongoDB connected: ${con.connection.host}`);
  } catch (err: any) {
    logger.error("Connection broken");
    console.log(err);
    logger.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
