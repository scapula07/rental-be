import { Router } from "express";
import UserController from "../../../modules/users/users.controller";

const router = Router();

const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/forgot-password", userController.forgotPassword);
router.put("/:id", userController.updateUser);
router.put("/:id/password", userController.updatePassword);
router.put("/:id/driver-license", userController.uploadDriverLicense);
router.put("/:id/insurance", userController.uploadInsurance);
router.delete("/:id", userController.deleteUser);
