import {
  Types,
  Schema,
  Document,
  model,
  Model,
  SchemaDefinitionProperty,
} from "mongoose";
import bcrypt from "bcrypt";
import { string } from "zod";

export interface ICar extends Document {
  carname: string;
  brand: string;
  model: string;
  modelNumber: string;
  year: string;
  priceWeekly: number;
  carImage: {
    publicId: string;
    url: string;
  };
  engine: string;
  power: string;
  mileage: string;
  colour: string;
  seats: string;
  reserved: boolean;
}

const CarSchema = new Schema<ICar>(
  {
    // Car details
    carname: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    modelNumber: {
      type: String,
      required: true,
    },
    priceWeekly: {
      type: Number,
      required: true,
    },
    carImage: {
      publicId: string,
      url: string,
    },
    engine: {
      type: String,
      required: true,
      enum: ["automatic", "manual"],
    },
    power: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid"],
      required: true,
    },
    mileage: {
      type: String,
    },
    colour: {
      type: String,
      enum: [
        "red",
        "blue",
        "green",
        "black",
        "white",
        "grey",
        "silver",
        "brown",
        "yellow",
        "purple",
        "orange",
        "pink",
      ],
    },
    seats: {
      type: String,
      enum: ["2", "4"],
    },

    // Availability details
    reserved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Cars: Model<ICar> = model<ICar>("Car", CarSchema);

export default Cars;
