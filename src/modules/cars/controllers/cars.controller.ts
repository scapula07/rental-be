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

export default class CarsController {
  carService = new CarsService();

  createCar = async (req: Request, res: Response, next: NextFunction) => {
    const { carname, p, description, brand, model, year } = req.body;
    try {
      const files = req.files as FileArray;

      const car = await this.carService.createCar({
        name,
        price,
        description,
        brand,
        model,
        year,
        images: files,
      });
      res.status(201).json({
        success: true,
        data: car,
      });
    } catch (error) {
      next(error);
    }
  };

  getAllCars = async (req: Request, res: Response, next: NextFunction) => {};

  getCarById = async (req: Request, res: Response, next: NextFunction) => {};

  // updateCar = async (req: Request, res: Response, next: NextFunction) => { }

  deleteCar = async (req: Request, res: Response, next: NextFunction) => {};
}
