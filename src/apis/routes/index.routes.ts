import { Router } from "express";
const router = Router();

import usersRoutes from "./users/users.routes";

router.use("/users", usersRoutes);

export default router;
