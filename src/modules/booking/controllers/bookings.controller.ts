import { Request, Response, NextFunction } from "express";
import BookingsService from "../service/bookings.services";
import CarsService from "../../cars/service/cars.services";
import UsersService from "../../users/service/users.services";

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

export default class BookingsController {
  bookingService = new BookingsService();
  carService = new CarsService();
  userService = new UsersService();

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

      // create payment and payment id. Payment is sheduled every two weeks (14 days)
      // prompt user to pay
      // if payment is successful, create booking
    } catch (err) {}
  };

  getUserBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  getAllUserBookings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  // admin booking function
  approveBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  completeBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  declineBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  cancelBooking = async (req: Request, res: Response, next: NextFunction) => {};

  getBooking = async (req: Request, res: Response, next: NextFunction) => {};

  getAllBookings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  deleteBooking = async (req: Request, res: Response, next: NextFunction) => {};
}
