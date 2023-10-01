import {
  Types,
  Schema,
  Document,
  model,
  Model,
  SchemaDefinitionProperty,
  ObjectId,
} from "mongoose";

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
    paymentId: {
      type: Types.ObjectId,
      ref: "Payment",
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
    pickupStatus: {
      type: String,
      enum: ["picked", "notPicked", "returned", "notReturned"],
      default: "notPicked",
    },
    bookingStatus: {
      type: String,
      enum: ["cancelled", "completed", "active", "pending"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

const Bookings: Model<IBooking> = model<IBooking>("Booking", BookingSchema);

export default Bookings;
