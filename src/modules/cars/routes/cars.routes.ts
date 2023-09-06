import { Router } from "express";
import cardController from "../controllers/cars.controller";
import { validate } from "../../../apis/middlewares/validate.middleware";
import checkFileUpload from "../../../apis/middlewares/checkFileUpload.middleware";
import auth from "../../../apis/middlewares/auth.middleware";
import {
  adminGuard,
  superAdminGuard,
} from "../../../apis/middlewares/adminGuard.middleware";

import { CreateCarSchema } from "../validation/zod.schema";

const router = Router();

const carsController = new cardController();

/**
 * @openapi
 * tags:
 *   name: Cars
 *   description: Car management
 */

/**
 * @openapi
 * /api/v1/cars/:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Cars not found
 *       '500':
 *         description: Internal server error
 */
router.get("/", auth, adminGuard, carsController.getAllCars);

/**
 * @openapi
 * /api/v1/cars/:
 *  post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Cars]
 *     summary: Create / Register a new car
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *              schema:
 *                  $ref: '#/components/schema/CreateCarInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/",
  auth,
  adminGuard,
  validate(CreateCarSchema),
  checkFileUpload,
  carsController.createCar
);

/**
 * @openapi
 * /api/v1/cars/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the car to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", auth, superAdminGuard, carsController.deleteCar);

/**
 * @openapi
 * /api/v1/cars/{id}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the car
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Car not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", auth, adminGuard, carsController.getCar);

export default router;
