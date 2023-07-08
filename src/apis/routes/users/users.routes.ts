import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import UserController from "../../../modules/users/users.controller";
import { validate } from "../../middlewares/validate.middleware";
import checkFileUpload from "../../middlewares/checkFileUpload.middleware";
import auth from "../../middlewares/auth.middleware";
import {
  CreateUserSchema,
  LoginUserSchema,
  ForgotPasswordSchema,
  UpdatePasswordSchema,
  UpdateUserSchema,
  UpdateDriverLicenseSchema,
} from "../../../models/users/zod.schema";

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
 *     security:
 *       - bearerAuth: []
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
router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
  },
  userController.getAllUsers
);
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
router.post("/", validate(CreateUserSchema), userController.registerUser);
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
router.post("/login", validate(LoginUserSchema), userController.loginUser);
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
router.post(
  "/forgot-password",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
    validate(ForgotPasswordSchema);
  },
  userController.forgotPassword
);
/**
 * @openapi
 * /api/v1/users/password/{id}:
 *  patch:
 *     security:
 *       - bearerAuth: []
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
router.patch(
  "/password/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
    validate(UpdatePasswordSchema);
  },

  userController.updatePassword
);
/**
 * @openapi
 * /api/v1/users/driver-license/{id}:
 *  patch:
 *     security:
 *       - bearerAuth: []
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
 *         required: true
 *         description: File for user driver license
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
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
router.patch(
  "/driver-license/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
    checkFileUpload(req, res, next);
    validate(UpdateDriverLicenseSchema);
  },

  userController.uploadDriverLicense
);
/**
 * @openapi
 * /api/v1/users/insurance/{id}:
 *  patch:
 *     security:
 *       - bearerAuth: []
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
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *          schema:
 *            name: filś
 *            type: string
 *            format: binary
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.patch(
  "/insurance/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
    checkFileUpload(req, res, next);
  },
  userController.uploadInsurance
);
/**
 * @openapi
 * /api/v1/users/{id}:
 *  patch:
 *     security:
 *       - bearerAuth: []
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
router.patch(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
    validate(UpdateUserSchema);
  },

  userController.updateUser
);
/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
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
router.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
  },
  userController.deleteUser
);
/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     security:
 *      - bearerAuth: []
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
router.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // Call the middleware function with req, res, and next
    auth(req, res, next);
  },
  userController.getUser
);

export default router;
