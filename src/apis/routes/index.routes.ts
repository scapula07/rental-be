import { Router } from "express";
const router = Router();

import usersRoutes from "../../modules/users/routes/users.routes";
import carsRoutes from "../../modules/cars/routes/cars.routes";
import bookingsRoute from "../../modules/booking/routes/bookings.routes";

router.use("/users", usersRoutes);

router.use("/cars", carsRoutes);

router.use("/bookings", bookingsRoute);

export default router;
