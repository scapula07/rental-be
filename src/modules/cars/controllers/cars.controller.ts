import { Request, Response, NextFunction } from "express";
import CarsService from "../service/cars.service";
import stripe from "../../../utils/stripe";
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

interface ICarOutput {
  id: string;
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
  status: string;
}

export default class CarsController {
  carService = new CarsService();

  createCar = async (req: Request, res: Response, next: NextFunction) => {
    const {
      carname,
      priceWeekly,
      engine,
      brand,
      model,
      modelNumber,
      year,
      power,
      mileage,
      colour,
      seats,
    } = req.body;
    try {
      const files = req.files as FileArray;

      // Extract file and upload to cloud
      const { public_id, secure_url } = await fileUploader(
        files,
        folders.carImage
      );

      // Stripe Product and Price Ids
      const product = await stripe.products.create({
        name: carname,
      });

      const price = await stripe.prices.create({
        unit_amount: priceWeekly,
        currency: "USD",
        product: product.id,
        recurring: { interval: "week", interval_count: 2 },
      });

      // Create car
      const car = await this.carService.createCar({
        carname,
        priceId: price.id,
        priceWeekly,
        engine,
        brand,
        model,
        modelNumber,
        year,
        power,
        mileage,
        colour,
        seats,
        carImage: {
          publicId: public_id,
          url: secure_url,
        },
      });

      const data: ICarOutput = {
        id: car!._id,
        carname: car!.carname,
        priceWeekly: car!.priceWeekly,
        engine: car!.engine,
        brand: car!.brand,
        model: car!.model,
        modelNumber: car!.modelNumber,
        carImage: car!.carImage,
        year: car!.year,
        power: car!.power,
        mileage: car!.mileage,
        colour: car!.colour,
        seats: car!.seats,
        status: car!.status,
      };

      res.status(201).json({
        status: "success",
        message: "Car created",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  getAllCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carService.getAllCars();

      if (cars?.length === 0) {
        throw next(new NotFoundException("Cars not found"));
      }

      const data: ICarOutput[] = cars!.map((car) => ({
        id: car._id,
        carname: car.carname,
        priceWeekly: car.priceWeekly,
        engine: car.engine,
        brand: car.brand,
        model: car.model,
        modelNumber: car.modelNumber,
        carImage: car.carImage,
        year: car.year,
        power: car.power,
        mileage: car.mileage,
        colour: car.colour,
        seats: car.seats,
        status: car.status,
      }));

      res.status(200).json({
        status: "success",
        message: "Cars fetched",
        data,
      });
    } catch (err) {}
  };

  getCar = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const car = await this.carService.getCarById(id);

      if (!car) {
        throw next(new NotFoundException("Car not found"));
      }

      const data: ICarOutput = {
        id: car!._id,
        carname: car!.carname,
        priceWeekly: car!.priceWeekly,
        engine: car!.engine,
        brand: car!.brand,
        model: car!.model,
        modelNumber: car!.modelNumber,
        carImage: car!.carImage,
        year: car!.year,
        power: car!.power,
        mileage: car!.mileage,
        colour: car!.colour,
        seats: car!.seats,
        status: car!.status,
      };

      res.status(200).json({
        status: "success",
        message: "Car fetched",
        data,
      });
    } catch (err) {}
  };

  updateCar = async (req: Request, res: Response, next: NextFunction) => {};

  deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const car = await this.carService.getCarById(id);

      if (!car) {
        throw next(new NotFoundException("Car not found"));
      }

      // Delete image from cloud
      if (car.carImage.publicId) await fileDestroyer(car!.carImage.publicId);

      // Delete car from db
      await this.carService.deleteCar(id);

      res.status(200).json({
        status: "success",
        message: "Car deleted",
      });
    } catch (err) {}
  };
}
