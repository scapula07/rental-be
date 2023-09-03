import { Router } from "express";
import UserController from "../controllers/users.controller";
import { validate } from "../../../apis/middlewares/validate.middleware";
import checkFileUpload from "../../../apis/middlewares/checkFileUpload.middleware";
import auth from "../../../apis/middlewares/auth.middleware";
import {
  adminGuard,
  superAdminGuard,
} from "../../../apis/middlewares/adminGuard.middleware";
import {
  CreateUserSchema,
  CreatePartnerSchema,
  CreateAdminSchema,
  LoginUserSchema,
  ForgotPasswordSchema,
  UpdatePasswordSchema,
  UpdateUserSchema,
  UpdateDriverLicenseSchema,
} from "../validation/zod.schema";

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
router.get("/", auth, adminGuard, userController.getAllUsers);

/**
 * @openapi
 * /api/v1/users/customers:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all Customers
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Customers not found
 *       '500':
 *         description: Internal server error
 */
router.get("/customers", auth, adminGuard, userController.getAllCustomers);

/**
 * @openapi
 * /api/v1/users/partners:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all Partner
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Partners not found
 *       '500':
 *         description: Internal server error
 */
router.get("/partners", auth, adminGuard, userController.getAllPartners);

/**
 * @openapi
 * /api/v1/users/admins:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all Admins
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Partners not found
 *       '500':
 *         description: Internal server error
 */
router.get("/admins", auth, superAdminGuard, userController.getAllAdmins);

/**
 * @openapi
 * /api/v1/users/customer:
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
router.post(
  "/customer",
  validate(CreateUserSchema),
  userController.registerCustomer
);

/**
 * @openapi
 * /api/v1/users/partner:
 *  post:
 *     tags: [Users]
 *     summary: Create / Register a new Partner
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/CreatePartnerInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/partner",
  validate(CreatePartnerSchema),
  userController.registerPartner
);

/**
 * @openapi
 * /api/v1/users/admin:
 *  post:
 *     tags: [Users]
 *     summary: Create / Register a new Admin
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schema/CreateAdminInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/admin",
  auth,
  superAdminGuard,
  validate(CreateAdminSchema),
  userController.registerAdmin
);

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
  auth,
  validate(ForgotPasswordSchema),
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
  auth,
  validate(UpdatePasswordSchema),
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
  auth,
  checkFileUpload,
  validate(UpdateDriverLicenseSchema),
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *            name: file
 *            type: string
 *            format: binary
 *            required: true
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
  auth,
  checkFileUpload,
  userController.uploadInsurance
);

/**
 * @openapi
 * /api/v1/users/profile-image/{id}:
 *  patch:
 *     security:
 *       - bearerAuth: []
 *     tags: [Users]
 *     summary: Upload profile image
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *          type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *          schema:
 *            name: file
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
  "/profile-image/:id",
  auth,
  checkFileUpload,
  userController.updateProfileImage
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
  auth,
  validate(UpdateUserSchema),
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
router.delete("/:id", auth, superAdminGuard, userController.deleteUser);

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
router.get("/:id", auth, userController.getUser);

export default router;
