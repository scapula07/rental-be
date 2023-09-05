import { Router } from "express";
import cardController from "../controllers/cars.controller";
import { validate } from "../../../apis/middlewares/validate.middleware";
import checkFileUpload from "../../../apis/middlewares/checkFileUpload.middleware";
import auth from "../../../apis/middlewares/auth.middleware";
import {
  adminGuard,
  superAdminGuard,
} from "../../../apis/middlewares/adminGuard.middleware";

const router = Router();

const carsController = new cardController();

/**
 * @openapi
 * tags:
 *   name: Cars
 *   description: Car management
 */

router.get("/", auth, adminGuard, carsController.getAllCars);

router.post("/", auth, adminGuard, checkFileUpload, carsController.createCar);

router.delete("/:id", auth, superAdminGuard, carsController.deleteCar);

router.get("/:id", auth, adminGuard, carsController.getCar);

export default router;
