import {
  Types,
  Schema,
  Document,
  model,
  Model,
  SchemaDefinitionProperty,
  ObjectId,
} from "mongoose";
import bcrypt from "bcrypt";
import { string } from "zod";

export interface IBooking extends Document {
  user: ObjectId;
  car: ObjectId;
  startDate: string;
  endDate: string;
  totalPrice: number;
  paymentId: ObjectId;
  pickupStatus: string;
  bookingStatus: string;
}

const BookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    car: {
      type: Types.ObjectId,
      ref: "Car",
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentId: {
      type: Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    pickupStatus: {
      type: String,
      enum: ["picked", "notPicked", "returned", "notReturned"],
    },
    bookingStatus: {
      type: String,
      enum: [
        "pending",
        "approved",
        "declined",
        "cancelled",
        "completed",
        "active",
      ],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

const Cars: Model<IBooking> = model<IBooking>("Booking", BookingSchema);

export default Cars;
