import Cars from "../models/cars.model";
import logger from "../../../utils/logger";

interface ICar {
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

  //   updateCar = async (carId: string, carData: IUpdateCar) => {};

  deleteCar = async (carId: string) => {
    try {
      const car = await this.cars.findByIdAndDelete(carId);
      return car;
    } catch (err) {}
  };
}
