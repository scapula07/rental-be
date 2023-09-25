import Cars from "../models/cars.model";
import logger from "../../../utils/logger";

interface ICar {
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
}

interface IUpdateCar {
  priceWeekly?: number;
  carImage?: {
    publicId?: string;
    url?: string;
  };
  mileage?: string;
  status?: string;
}

export default class CarsService {
  cars = Cars;

  createCar = async (carData: ICar) => {
    try {
      const car = await this.cars.create({ ...carData });
      return car;
    } catch (err) {}
  };

  getCarById = async (carId: string) => {
    try {
      const car = await this.cars.findById(carId);
      return car;
    } catch (err) {}
  };

  getAllCars = async () => {
    try {
      const cars = await this.cars.find();
      return cars;
    } catch (err) {}
  };

  updateCar = async (carId: string, carData: IUpdateCar) => {
    try {
      const car = await this.cars.findByIdAndUpdate(
        carId,
        {
          ...carData,
        },

        { new: true }
      );

      return car;
    } catch (err) {}
  };

  deleteCar = async (carId: string) => {
    try {
      const car = await this.cars.findByIdAndDelete(carId);
      return car;
    } catch (err) {}
  };
}
