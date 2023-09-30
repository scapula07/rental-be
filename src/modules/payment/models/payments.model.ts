import {
  Types,
  Schema,
  Document,
  model,
  Model,
  SchemaDefinitionProperty,
  ObjectId,
} from "mongoose";

export interface IPayment extends Document {
  customerId: string;
  priceId: string;
  subscriptionId: string;
  completedPayments: number;
}

const PaymentSchema = new Schema<IPayment>(
  {
    customerId: {
      type: String,
      required: true,
    },
    priceId: {
      type: String,
      required: true,
    },
    subscriptionId: {
      type: String,
      required: true,
    },
    completedPayments: {
      type: Number, // Number of successful subscription payments for booking duration
      default: 0,
    },
  },
  { timestamps: true }
);

const Payments: Model<IPayment> = model<IPayment>("Payment", PaymentSchema);

export default Payments;
