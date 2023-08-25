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
  modelNumber: string;
  carImage: {
    publicId: string;
    url: string;
  };
  engine: string;
  mileage: string;
  colour: string;
  seat: string;
  reserved: boolean;
}

const CarSchema = new Schema<ICar>(
  {
    // Car details
    carname: {
      type: String,
      required: true,
    },
    modelNumber: {
      type: String,
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
    seat: {
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
