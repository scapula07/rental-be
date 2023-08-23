import { Router } from "express";
const router = Router();

import usersRoutes from "../../modules/users/routes/users.routes";

router.use("/users", usersRoutes);

export default router;
