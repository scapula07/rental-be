import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyparser from "body-parser";

import connectDB from "./database";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import errorMiddleware from "./apis/middlewares/error.middleware";
import morganMiddleware from "./apis/middlewares/morgan.middleware";

import logger from "./utils/logger";

import routes from "./apis/routes/index.routes";

dotenv.config();

import config from "./config";
const client_url_dev = config.urls.client_dev || "";
const client_url_prod = config.urls.client_prod || "";

var whitelist = [
  client_url_dev,
  client_url_prod,
  "http://localhost:3000",
  "http://localhost:3001",
  "https://perzsi-rental-app.vercel.app",
  "https://www.perzsirentals.com",
  "https://perzi-backup.vercel.app",
  "https://rental-fe-nyuh.vercel.app",
  "https://rental-fe-cjzz.vercel.app"
];

var corsOptions = {
  origin: whitelist,
  credentials: true,
};

app.use(cors(corsOptions));
app.set("trust proxy", 1); // trust first proxy

//Parse Request to body-parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());
app.use(morganMiddleware);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// mongoDB connection
connectDB();

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/api/status", (req, res) => {
  logger.info("Checking the API status: Everything is OK");
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!",
  });
});

// Load Routers
app.use("/api/v1", routes);

app.use(errorMiddleware);

export default app;
