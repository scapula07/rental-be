import Payments from "../models/payments.model";
import logger from "../../../utils/logger";

interface IPayment {
  customerId: string;
  priceId: string;
  subscriptionId: string;
  completedPayments?: number;
}

interface IUpdatePayment {
  completedPayments: number;
}

export default class PaymentsService {
  payments = Payments;

  createPayment = async (paymentData: IPayment) => {
    try {
      const payment = await this.payments.create({ ...paymentData });
      return payment;
    } catch (err) {}
  };

  getPaymentById = async (paymentId: string) => {
    try {
      const payment = await this.payments.findById(paymentId);
      return payment;
    } catch (err) {}
  };

  getAllPayments = async () => {
    try {
      const payments = await this.payments.find();
      return payments;
    } catch (err) {}
  };

  updatePayment = async (paymentId: string, paymentData: IUpdatePayment) => {
    try {
      const payment = await this.payments.findByIdAndUpdate(
        paymentId,
        {
          ...paymentData,
        },

        { new: true }
      );

      return payment;
    } catch (err) {}
  };

  deletePayment = async (paymentId: string) => {
    try {
      const payment = await this.payments.findByIdAndDelete(paymentId);
      return payment;
    } catch (err) {}
  };
}
