import { Request, Response, NextFunction } from "express";
import BookingsService from "../service/bookings.services";
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

  // customer booking function

  createBooking = async (req: Request, res: Response, next: NextFunction) => {};

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
