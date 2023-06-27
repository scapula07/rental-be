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
 *     tags: [Users]
 *     summary: Create / Register a new user
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/CreateUserInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/", userController.registerUser);
/**
 * @openapi
 * /api/v1/users/login:
 *  post:
 *     tags: [Users]
 *     summary: Login a user
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/LoginUserInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post("/login", userController.loginUser);
/**
 * @openapi
 * /api/v1/users/forgot-password:
 *  post:
 *     tags: [Users]
 *     summary: Forgot password
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/ForgotPasswordInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post("/forgot-password", userController.forgotPassword);
/**
 * @openapi
 * /api/v1/users/password/{id}:
 *  put:
 *     tags: [Users]
 *     summary: Update password
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/UpdatePasswordInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.put("/password/:id", userController.updatePassword);
/**
 * @openapi
 * /api/v1/users/driver-license/{id}:
 *  put:
 *     tags: [Users]
 *     summary: Upload driver license / license details
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *          type: string
 *       - in: formData
 *         name: file
 *         type: file
 *         description: File for user driver license
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/UploadLicenseInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.put("/driver-license/:id", userController.uploadDriverLicense);
/**
 * @openapi
 * /api/v1/users/insurance/{id}:
 *  put:
 *     tags: [Users]
 *     summary: Upload insurance
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *          type: string
 *       - in: formData
 *         name: file
 *         type: file
 *         description: File for user insurance
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.put("/insurance/:id", userController.uploadInsurance);
/**
 * @openapi
 * /api/v1/users/{id}:
 *  put:
 *     tags: [Users]
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/UpdateUserInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
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
