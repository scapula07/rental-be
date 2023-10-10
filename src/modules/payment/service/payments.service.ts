import Payments from "../models/payments.model";
import logger from "../../../utils/logger";

interface IPayment {
  customerId: string;
  priceId: string;
  subscriptionId: string;
  completedPayments?: number;
}

interface IUpdatePayment {
  completedPayments?: number;
  paymentStatus?: string;
}

interface IPaymentQuery {
  customerId?: string;
  priceId?: string;
  subscriptionId?: string;
  completedPayments?: number;
  paymentStatus?: string;
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

  findOnePayment = async (query: IPaymentQuery) => {
    try {
      const payment = await this.payments.findOne(query);
      return payment;
    } catch (err) {}
  };

  findPayment = async (query: IPaymentQuery) => {
    try {
      const payments = await this.payments.find(query);
      return payments;
    } catch (err) {}
  };

  deletePayment = async (paymentId: string) => {
    try {
      const payment = await this.payments.findByIdAndDelete(paymentId);
      return payment;
    } catch (err) {}
  };
}
