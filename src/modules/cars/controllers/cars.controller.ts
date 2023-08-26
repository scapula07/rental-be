import e, { Request, Response, NextFunction } from "express";
import CarsService from "../service/cars.services";
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

interface ICarOutput {}

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

      const car = await this.carService.createCar({
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
        carImage: {
          publicId: public_id,
          url: secure_url,
        },
      });

      const data = {
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
        reserved: car!.reserved,
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
        reserved: car.reserved,
      }));

      res.status(200).json({
        status: "success",
        message: "Cars fetched",
        data,
      });
    } catch (err) {}
  };

  getCarById = async (req: Request, res: Response, next: NextFunction) => {};

  // updateCar = async (req: Request, res: Response, next: NextFunction) => { }

  deleteCar = async (req: Request, res: Response, next: NextFunction) => {};
}
