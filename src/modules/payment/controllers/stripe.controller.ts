// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import app from "../../../app";
import stripe from "../../../utils/stripe";
import bodyParser = require("body-parser");
import config from "../../../config";

import UsersService from "../../users/service/users.service";
import PaymentsService from "../service/payments.service";
import CarsService from "../../cars/service/cars.service";
import BookingService from "../../booking/service/bookings.service";

const webhookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Retrieve the event by verifying the signature using the raw body ad secret.
  let event;

  // Services
  const userService = new UsersService();
  const paymentService = new PaymentsService();
  const carService = new CarsService();
  const bookingService = new BookingService();

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"] as string,
      config.stripe.webhook_secret as string
    );
  } catch (err) {
    console.log(err);
    console.log(`⚠️  Webhook signature verification failed.`);
    // console.log(`⚠️  Check the env file and enter the correct webhook secret.`);
    return res.sendStatus(400);
  }
  // Extract the object from the event.
  const dataObject = event.data.object;
  let sub_id, payment, booking;

  // Handle the event
  // Review important events for Billing webhooks
  // https://stripe.com/docs/billing/webhooks
  // Remove comment to see the various objects sent for this sample
  switch (event.type) {
    case "invoice.paid":
      // Get the subscription ID from the invoice
      sub_id = (dataObject as Stripe.Invoice).subscription;

      payment = await paymentService.findOnePayment({
        subscriptionId: sub_id as string,
      });

      // Update payment status
      await paymentService.updatePayment(payment!._id, {
        paymentStatus: "paid" as string,
      });

      // Find booking
      booking = await bookingService.findOneBooking({
        paymentId: payment?.id,
      });

      // Update booking status
      if (booking!.bookingStatus !== "active")
        await bookingService.updateBooking(booking!.id, {
          bookingStatus: "active",
        });

      // Send user a notification via email

      // Used to provision services after the trial has ended.
      // The status of the invoice will show up as paid. Store the status in your
      // database to reference when a user accesses your service to avoid hitting rate limits.
      break;
    case "invoice.payment_failed":
      // Get the subscription ID from the invoice
      sub_id = (dataObject as Stripe.Invoice).subscription;

      payment = await paymentService.findOnePayment({
        subscriptionId: sub_id as string,
      });

      // Update payment status
      await paymentService.updatePayment(payment!._id, {
        paymentStatus: "unpaid" as string,
      });

      // Find booking
      booking = await bookingService.findOneBooking({
        paymentId: payment?.id,
      });

      // Update booking status

      await bookingService.updateBooking(booking!.id, {
        bookingStatus: "pending",
      });

      // Send notification to user via email

      // If the payment fails or the customer does not have a valid payment method,
      //  an invoice.payment_failed event is sent, the subscription becomes past_due.
      // Use this webhook to notify your user that their payment has
      // failed and to retrieve new card details.
      break;
    case "customer.subscription.deleted":
      if (event.request != null) {
        // handle a subscription canceled by your request
        // from above.
      } else {
        // handle subscription canceled automatically based
        // upon your subscription settings.
        sub_id = (dataObject as Stripe.Subscription).id;

        // Find payment
        payment = await paymentService.findOnePayment({
          subscriptionId: sub_id as string,
        });

        // Find booking
        booking = await bookingService.findOneBooking({
          paymentId: payment?.id,
        });

        // Update booking status
        await bookingService.updateBooking(booking!.id, {
          bookingStatus: "completed",
        });

        // Send user notification via email
      }
      break;
    default:
    // Unexpected event type
  }

  res.sendStatus(200);
};

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  webhookController
);

// app.post(
//   "/webhook",
//   bodyParser.raw({ type: "application/json" }),
//   webhookController
// );
