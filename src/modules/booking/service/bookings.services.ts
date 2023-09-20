import Bookings from "../models/bookings.model";
import logger from "../../../utils/logger";

interface IBooking {
  user: string;
  booking: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  paymentId: string;
  pickupStatus: string;
  bookingStatus: string;
}

interface IBooking {
  pickupStatus: string;
  bookingStatus: string;
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
      return booking;
    } catch (err) {}
  };

  getAllBookings = async () => {
    try {
      const bookings = await this.bookings.find();
      return bookings;
    } catch (err) {}
  };

  updateBooking = async (bookingId: string, bookingData: IBooking) => {
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

  deleteBooking = async (bookingId: string) => {
    try {
      const booking = await this.bookings.findByIdAndDelete(bookingId);
      return booking;
    } catch (err) {}
  };
}
