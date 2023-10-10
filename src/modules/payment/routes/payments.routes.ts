import { Router } from "express";
import { validate } from "../../../apis/middlewares/validate.middleware";
import auth from "../../../apis/middlewares/auth.middleware";
import {
  adminGuard,
  superAdminGuard,
} from "../../../apis/middlewares/adminGuard.middleware";

import PaymentsController from "../controllers/payments.controller";

const router = Router();

const paymentsController = new PaymentsController();

/**
 * @openapi
 * tags:
 *   name: Payments
 *   description: Payments management
 */

/**
 * @openapi
 * /api/v1/payments/:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: payments not found
 *       '500':
 *         description: Internal server error
 */
router.get("/", auth, adminGuard, paymentsController.getAllPayments);

/**
 * @openapi
 * /api/v1/payments/invoices/{userId}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all user invoice for by ID
 *     tags: [Payments]
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
 *         description: User Invoices not found
 *       '500':
 *         description: Internal server error
 */
router.get("/invoices/:uerId", auth, adminGuard, paymentsController.getPayment);

/**
 * @openapi
 * /api/v1/payments/{id}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the payment
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Payment not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", auth, adminGuard, paymentsController.getPayment);

export default router;
