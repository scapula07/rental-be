import { Router } from "express";
const router = Router();

import usersRoutes from "../../modules/users/routes/users.routes";
import carsRoutes from "../../modules/cars/routes/cars.routes";
import bookingsRoute from "../../modules/booking/routes/bookings.routes";
import paymentsRoute from "../../modules/payment/routes/payments.routes";

router.use("/users", usersRoutes);

router.use("/cars", carsRoutes);

router.use("/bookings", bookingsRoute);

router.use("/payments", paymentsRoute);

export default router;
