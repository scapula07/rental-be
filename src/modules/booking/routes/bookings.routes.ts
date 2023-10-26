import { Router } from "express";
import BookingsController from "../controllers/bookings.controller";
import { validate } from "../../../apis/middlewares/validate.middleware";
import auth from "../../../apis/middlewares/auth.middleware";
import {
  adminGuard,
  superAdminGuard,
} from "../../../apis/middlewares/adminGuard.middleware";

import { CreateBookingSchema } from "../validation/zod.schema";

const router = Router();

const bookingsController = new BookingsController();

/**
 * @openapi
 * tags:
 *   name: Bookings
 *   description: Booking management
 */

/**
 * @openapi
 * /api/v1/bookings/:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Bookings not found
 *       '500':
 *         description: Internal server error
 */
router.get("/", auth,
//  adminGuard, 
 bookingsController.getAllBookings);

/**
 * @openapi
 * /api/v1/bookings/user-bookings/{userId}/{bookingId}:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get user booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - in: path
 *         name: bookingId
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */
router.get(
  "/user-bookings/:userId/:bookingId",
  auth,
  adminGuard,
  bookingsController.getUserBooking
);

/**
 * @openapi
 * /api/v1/bookings/user-bookings/{userId}:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all user bookings
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Bookings not found
 *       '500':
 *         description: Internal server error
 */
router.get(
  "/user-bookings/:userId",
  auth,
  adminGuard,
  bookingsController.getAllUserBookings
);

/**
 * @openapi
 * /api/v1/bookings/:
 *  post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Bookings]
 *     summary: Create a new booking
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *              schema:
 *                  $ref: '#/components/schema/CreateBookingInput'
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/",
  auth,
  validate(CreateBookingSchema),
  bookingsController.createBooking
);

/**
 * @openapi
 * /api/v1/bookings/pickup-status/{bookingId}:
 *  post:
 *     security:
 *       - bearerAuth: []
 *     summary: update booking pickup status
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *              schema:
 *                type: object
 *                required:
 *                  - pickupStatus
 *                properties:
 *                  pickupStatus:
 *                   type: string
 *                   example: picked
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/pickup-status/:bookingId",
  auth,
  // adminGuard,
  bookingsController.updatePickupStatus
);

/**
 * @openapi
 * /api/v1/bookings/complete-bookings/{bookingId}:
 *  post:
 *     security:
 *       - bearerAuth: []
 *     summary: Complete booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Bookings not found
 *       '500':
 *         description: Internal server error
 *///
router.post(
  "/complete-bookings/:bookingId",
  auth,
  // adminGuard,
  bookingsController.completeBooking
);
/**
 * @openapi
 * /api/v1/bookings/cancel-bookings/{bookingId}:
 *  post:
 *     security:
 *       - bearerAuth: []
 *     summary: Caancel booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Bookings not found
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/cancel-bookings/:bookingId",
  auth,
  adminGuard,
  bookingsController.cancelBooking
);

/**
 * @openapi
 * /api/v1/bookings/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", auth, superAdminGuard, bookingsController.deleteBooking);

/**
 * @openapi
 * /api/v1/bookings/{id}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", auth, adminGuard, bookingsController.getBooking);

export default router;
