import Bookings from "../models/bookings.model";
import logger from "../../../utils/logger";

interface IBooking {
  user: string;
  car: string;
  paymentId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
}

interface IUpdateBooking {
  pickupStatus?: string;
  bookingStatus?: string;
}

interface IBookingQuery {
  user?: string;
  car?: string;
  startDate?: string;
  endDate?: string;
  totalPrice?: number;
  paymentId?: string;
  pickupStatus?: string;
  bookingStatus?: string;
}

export default class BookingService {
  bookings = Bookings;

  createBooking = async (bookingData: IBooking) => {
    try {
      const booking = await this.bookings.create({ ...bookingData });
      return booking;
    } catch (err) {}
  };

  getBookingById = async (bookingId: string) => {
    
    try {
      const booking = await this.bookings.findById(bookingId);
      console.log(booking)
      return booking;
    } catch (err) {}
  };

  getAllBookings = async () => {
    try {
      const bookings = await this.bookings.find();
      return bookings;
    } catch (err) {}
  };

  getAllUserBooking = async (userId: string) => {
    try {
      const bookings = await this.bookings.find({ user: userId });
      return bookings;
    } catch (err) {}
  };

  updateBooking = async (bookingId: string, bookingData: IUpdateBooking) => {
    try {
      const booking = await this.bookings.findByIdAndUpdate(
        bookingId,
        {
          ...bookingData,
        },

        { new: true }
      );

      return booking;
    } catch (err) {}
  };

  findOneBooking = async (query: IBookingQuery) => {
    try {
      const booking = await this.bookings.findOne(query);
      return booking;
    } catch (err) {}
  };

  findPayment = async (query: IBookingQuery) => {
    try {
      const booking = await this.bookings.find(query);
      return booking;
    } catch (err) {}
  };

  deleteBooking = async (bookingId: string) => {
    try {
      const booking = await this.bookings.findByIdAndDelete(bookingId);
      return booking;
    } catch (err) {}
  };
}
