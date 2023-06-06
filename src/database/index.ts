import mongoose from "mongoose";

import dotenv from "dotenv";

import config from "../config";

dotenv.config();

//  remember to replace with appropriate names
let username = config.mongoDb.mongoUser;
let password = config.mongoDb.mongoPass;
let path = config.mongoDb.mongoPath;

const MONGO_URI = `mongodb+srv://${username}:${password}${path}`;

const connectDB = async () => {
  console.log("conncect DP");
  console.log(MONGO_URI);
  try {
    // mongodb connection string
    const con = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err: any) {
    console.log("Connection broken");
    console.log(err);
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
