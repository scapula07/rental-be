import { Router } from "express";
const router = Router();

import usersRoutes from "../../modules/users/routes/users.routes";
import carsRoutes from "../../modules/cars/routes/cars.routes";

router.use("/users", usersRoutes);

router.use("/cars", carsRoutes);

export default router;
