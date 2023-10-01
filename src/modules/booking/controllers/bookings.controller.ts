import { Request, Response, NextFunction } from "express";
import stripe from "../../../utils/stripe";
import BookingsService from "../service/bookings.service";
import CarsService from "../../cars/service/cars.service";
import UsersService from "../../users/service/users.service";
import PaymentsService from "../../payment/service/payments.service";

import HttpException from "../../../exception/HttpException";
import InvalidInputException from "../../../exception/InvalidInput";
import NotFoundException from "../../../exception/NotFound";
import UnAuthorizedException from "../../../exception/Unauthorized";
import logger from "../../../utils/logger";
import {
  fileUploader,
  fileDestroyer,
  folders,
} from "../../../utils/fileUploader";
import { FileArray } from "express-fileupload";

interface IBookingOutput {
  id: string;
  user: string;
  car: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  pickupStatus: string;
  bookingStatus: string;
}

export default class BookingsController {
  bookingService = new BookingsService();
  carService = new CarsService();
  userService = new UsersService();
  paymentService = new PaymentsService();

  // customer booking function

  createBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { carId, userId, startDate, endDate } = req.body;
    try {
      // check car id
      const car = await this.carService.getCarById(carId);
      if (!car) {
        throw new NotFoundException("Car not found");
      }
      // check if car is available
      if (car.status !== "available") {
        throw new InvalidInputException("Car is not available");
      }
      // check user id
      const user = await this.userService.getUserById(userId);
      if (!user) {
        throw new NotFoundException("User not found");
      }
      // check if minimum duration is met (2 months/8 weeks)
      const start_date = new Date(startDate);
      const end_date = new Date(endDate);
      const duration = end_date.getTime() - start_date.getTime();

      const durationInWeeks = duration / (1000 * 3600 * 24 * 7);

      if (durationInWeeks < 8) {
        throw new InvalidInputException("Minimum duration is 2 months/8 weeks");
      }

      // calculate total price
      const priceWeekly = car.priceWeekly;
      const totalPrice = priceWeekly * durationInWeeks;

      // create stripe customer(billing) ID for user
      // update customer ID for user
      const customer = await stripe.customers.create({
        email: user.email,
      });

      const customerData = {
        customerId: customer.id,
      };

      await this.userService.updateUser(userId, customerData);

      // Fetch price ID from car database

      const priceId = car.priceId;

      // create stripe subscription ID for recurring payments

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        payment_settings: { save_default_payment_method: "on_subscription" },
        expand: ["latest_invoice.payment_intent"],
        cancel_at: endDate,
        collection_method: "charge_automatically",
      });

      // create payment and payment id for payment service. Payment is sheduled every 2 week (14 days)
      const payment = await this.paymentService.createPayment({
        customerId: customer.id,
        priceId,
        subscriptionId: subscription.id,
      });

      // create booking
      const booking = await this.bookingService.createBooking({
        user: userId,
        car: carId,
        paymentId: payment!._id,
        startDate,
        endDate,
        totalPrice,
      });

      // update car status to unavailable (booked)
      const carData = {
        status: "reserved",
      };

      await this.carService.updateCar(carId, carData);

      const data: IBookingOutput = {
        id: booking!._id,
        user: booking!.user.toString(),
        car: booking!.car.toString(),
        startDate: booking!.startDate,
        endDate: booking!.endDate,
        totalPrice: booking!.totalPrice,
        pickupStatus: booking!.pickupStatus,
        bookingStatus: booking!.bookingStatus,
      };

      // return booking, client secret and subscription ID
      res.status(201).json({
        status: "success",
        message: "Booking created",
        data,
        clientSecret: (subscription.latest_invoice as any).payment_intent
          .client_secret,
        subscriptionId: subscription.id,
      });
    } catch (err) {}
  };

  getUserBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId, userId } = req.params;
    try {
      //check booking id
      const booking = await this.bookingService.getBookingById(bookingId);
      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      // check user id
      const user = await this.userService.getUserById(userId);
      if (!user) {
        throw new NotFoundException("User not found");
      }

      // check if user is authorized to view booking
      if (booking.user.toString() !== userId) {
        throw new UnAuthorizedException("Unauthorized");
      }

      // return booking

      const data: IBookingOutput = {
        id: booking._id,
        user: booking.user.toString(),
        car: booking.car.toString(),
        startDate: booking.startDate,
        endDate: booking.endDate,
        totalPrice: booking.totalPrice,
        pickupStatus: booking.pickupStatus,
        bookingStatus: booking.bookingStatus,
      };

      res.status(200).json({
        status: "success",
        message: "Booking fetched",
        data,
      });
    } catch (err) {}
  };

  getAllUserBookings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userId } = req.params;
    try {
      // check user id
      const user = await this.userService.getUserById(userId);
      if (!user) {
        throw new NotFoundException("User not found");
      }

      // get all bookings by user id
      const bookings = await this.bookingService.getAllUserBooking(userId);

      // return bookings
      const data: IBookingOutput[] = bookings!.map((booking) => {
        return {
          id: booking._id,
          user: booking.user.toString(),
          car: booking.car.toString(),
          startDate: booking.startDate,
          endDate: booking.endDate,
          totalPrice: booking.totalPrice,
          pickupStatus: booking.pickupStatus,
          bookingStatus: booking.bookingStatus,
        };
      });

      res.status(200).json({
        status: "success",
        message: "Bookings fetched",
        data,
      });
    } catch (err) {}
  };

  // admin booking functions

  updatePickupStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { bookingId } = req.params;
    const { pickupStatus } = req.body;
    try {
      const booking = await this.bookingService.getBookingById(bookingId);
      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      // check if pickup status is valid
      const validPickupStatus = [
        "picked",
        "notPicked",
        "returned",
        "notReturned",
      ];

      if (!validPickupStatus.includes(pickupStatus)) {
        throw new InvalidInputException("Invalid pickup status");
      }

      // update booking

      const bookingData = {
        pickupStatus,
      };

      const updatedBooking = await this.bookingService.updateBooking(
        bookingId,
        bookingData
      );

      // return booking
      const data: IBookingOutput = {
        id: updatedBooking!._id,
        user: updatedBooking!.user.toString(),
        car: updatedBooking!.car.toString(),
        startDate: updatedBooking!.startDate,
        endDate: updatedBooking!.endDate,
        totalPrice: updatedBooking!.totalPrice,
        pickupStatus: updatedBooking!.pickupStatus,
        bookingStatus: updatedBooking!.bookingStatus,
      };

      res.status(200).json({
        status: "success",
        message: "Booking updated",
        data,
      });
    } catch (err) {}
  };

  completeBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId } = req.params;
    try {
      // check booking id
      const booking = await this.bookingService.getBookingById(bookingId);
      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      // update booking status to completed
      const bookingData = {
        pickupStatus: "returned",
        bookingStatus: "completed",
      };

      const updatedBooking = await this.bookingService.updateBooking(
        bookingId,
        bookingData
      );

      // update car status to available
      const carId = booking.car.toString();
      const carData = {
        status: "available",
      };

      await this.carService.updateCar(carId, carData);

      // return booking
      const data: IBookingOutput = {
        id: updatedBooking!._id,
        user: updatedBooking!.user.toString(),
        car: updatedBooking!.car.toString(),
        startDate: updatedBooking!.startDate,
        endDate: updatedBooking!.endDate,
        totalPrice: updatedBooking!.totalPrice,
        pickupStatus: updatedBooking!.pickupStatus,
        bookingStatus: updatedBooking!.bookingStatus,
      };

      res.status(200).json({
        status: "success",
        message: "Booking completed",
        data,
      });
    } catch (err) {}
  };

  cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId } = req.params;
    try {
      // check booking id
      const booking = await this.bookingService.getBookingById(bookingId);
      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      // update booking status to cancelled
      const bookingData = {
        bookingStatus: "cancelled",
      };

      const updatedBooking = await this.bookingService.updateBooking(
        bookingId,
        bookingData
      );

      // update car status to available
      const carId = booking.car.toString();
      const carData = {
        status: "available",
      };

      await this.carService.updateCar(carId, carData);

      // return booking
      const data: IBookingOutput = {
        id: updatedBooking!._id,
        user: updatedBooking!.user.toString(),
        car: updatedBooking!.car.toString(),
        startDate: updatedBooking!.startDate,
        endDate: updatedBooking!.endDate,
        totalPrice: updatedBooking!.totalPrice,
        pickupStatus: updatedBooking!.pickupStatus,
        bookingStatus: updatedBooking!.bookingStatus,
      };

      res.status(200).json({
        status: "success",
        message: "Booking cancelled",
        data,
      });
    } catch (err) {}
  };

  getBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId } = req.params;
    try {
      const booking = await this.bookingService.getBookingById(bookingId);

      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      const data: IBookingOutput = {
        id: booking._id,
        user: booking.user.toString(),
        car: booking.car.toString(),
        startDate: booking.startDate,
        endDate: booking.endDate,
        totalPrice: booking.totalPrice,
        pickupStatus: booking.pickupStatus,
        bookingStatus: booking.bookingStatus,
      };

      res.status(200).json({
        status: "success",
        message: "Booking fetched",
        data,
      });
    } catch (err) {}
  };

  getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookings = await this.bookingService.getAllBookings();

      const data: IBookingOutput[] = bookings!.map((booking) => {
        return {
          id: booking._id,
          user: booking.user.toString(),
          car: booking.car.toString(),
          startDate: booking.startDate,
          endDate: booking.endDate,
          totalPrice: booking.totalPrice,
          pickupStatus: booking.pickupStatus,
          bookingStatus: booking.bookingStatus,
        };
      });

      res.status(200).json({
        status: "success",
        message: "Bookings fetched",
        data,
      });
    } catch (err) {}
  };

  deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId } = req.params;
    try {
      const booking = await this.bookingService.getBookingById(bookingId);

      if (!booking) {
        throw new NotFoundException("Booking not found");
      }

      await this.bookingService.deleteBooking(bookingId);

      res.status(200).json({
        status: "success",
        message: "Booking deleted",
      });
    } catch (err) {}
  };
}
