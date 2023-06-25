import { Router } from "express";
import UserController from "../../../modules/users/users.controller";

const router = Router();

const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/:id", userController.updateUser);
