// @todo Fetch the payment details from the database and return it to the client.
// @todo Fetch all invoices from stripe. Invoice should show all previous and pending payments details and the next payment date. It should show the status of those payments.
// @todo Fetch all subscriptions from stripe.

import { Request, Response, NextFunction } from "express";
import Stripe from "../../../utils/stripe";

import BookingsService from "../../booking/service/bookings.service";
import CarsService from "../../cars/service/cars.service";
import UsersService from "../../users/service/users.service";
import PaymentsService from "../service/payments.service";

import HttpException from "../../../exception/HttpException";
import InvalidInputException from "../../../exception/InvalidInput";
import NotFoundException from "../../../exception/NotFound";
import UnAuthorizedException from "../../../exception/Unauthorized";
import logger from "../../../utils/logger";

interface IPaymentOutput {}

interface IInvoiceOutput {
  id: string;
  amountDue: number;
  amountPaid: number;
  amountRemaining: number;
  currency: string;
  periodEnd: number;
  periodStart: number;
  paid: boolean;
  status: string | any;
  subscription: string | any;
  nextPaymentAttempt: number | any;
  paymentMethod: string | any;
  paymentMethodType: string | any;
}

export default class PaymentsController {
  bookingService = new BookingsService();
  carService = new CarsService();
  userService = new UsersService();
  paymentService = new PaymentsService();

  getPayment = async (req: Request, res: Response, next: NextFunction) => {};

  getAllPayments = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  // Stripe methods
  // Fetch user invoices based on subscription Id

  getAllUserSubscriptionInvoice = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userId } = req.params;

    try {
      // Check user Id
      const user = await this.userService.getUserById(userId);
      if (!user) {
        throw new NotFoundException("User not found");
      }

      // Use customerId in user Id to fetch for paymentId
      const payment = await this.paymentService.findOnePayment({
        customerId: user.customerId,
      });

      if (!payment) {
        throw new NotFoundException("Payment not found");
      }

      // Fetch all invoices from stripe
      const invoices = await Stripe.invoices.list({
        customer: user.customerId,
        subscription: payment.subscriptionId,
      });

      if (!invoices) {
        throw new NotFoundException("Invoices not found");
      }

      // Return invoices to client
      const data: IInvoiceOutput[] = invoices.data.map((invoice) => {
        return {
          id: invoice!.id,
          amountDue: invoice!.amount_due,
          amountPaid: invoice!.amount_paid,
          amountRemaining: invoice!.amount_remaining,
          currency: invoice!.currency,
          periodEnd: invoice!.period_end,
          periodStart: invoice!.period_start,
          paid: invoice!.paid,
          status: invoice!.status,
          subscription: invoice!.subscription,
          nextPaymentAttempt: invoice!.next_payment_attempt,
          paymentMethod: invoice!.payment_intent,
          paymentMethodType: invoice!.payment_intent,
        };
      });
    } catch (err) {}
  };
}
