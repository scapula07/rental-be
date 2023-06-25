import { Router } from "express";
import UserController from "../../../modules/users/users.controller";

const router = Router();

const userController = new UserController();

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @openapi
 * /api/v1/users/:
 *  get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Users not found
 *       '500':
 *         description: Internal server error
 */
router.get("/", userController.getAllUsers);
/**
 * @openapi
 * /api/v1/users/:
 *  post:
 *     summary: Create / Register a new user
 *     tags: [Users]
 *     requestBody:
 *        required: true
 *        contents:
 *          application/json:
 *             schema:
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/forgot-password", userController.forgotPassword);
router.put("/password/:id", userController.updatePassword);
router.put("/:id/driver-license", userController.uploadDriverLicense);
router.put("/:id/insurance", userController.uploadInsurance);
router.put("/:id", userController.updateUser);
/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     summary: delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Users not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", userController.deleteUser);
/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", userController.getUser);

export default router;
