import { Router } from "express";
const router = Router();

import usersRoutes from "../../modules/users/routes/index.routes";

router.use("/users", usersRoutes);

export default router;
