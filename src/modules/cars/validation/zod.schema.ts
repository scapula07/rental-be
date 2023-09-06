import { object, string, number, date, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schema:
 *   CreateCarInput:
 *    type: object
 *    required:
 *      - carname
 *      - priceWeekly
 *      - engine
 *      - brand
 *      - model
 *      - modelNumber
 *      - year
 *      - power
 *      - mileage
 *      - colour
 *      - seats
 *      - carImage
 *    properties:
 *      carname:
 *       type: string
 *       example: Toyota
 *      priceWeekly:
 *       type: number,
 *       example: 100
 *      engine:
 *       type: string,
 *       example: automatic
 *      brand:
 *       type: string,
 *       example: Toyota
 *      model:
 *       type: string,
 *       example: Corolla
 *      year:
 *       type: string,
 *       example: 2019
 *      power:
 *       type: string,
 *       example: 1000hp
 *      mileage:
 *       type: string,
 *       example: 1000km
 *      colour:
 *       type: string,
 *       example: red
 *      seats:
 *       type: string,
 *       example: 4
 *      carImage:
 *       type: string,
 *       format: binary
 */
export const CreateCarSchema = object({
  body: object({
    carname: string({
      required_error: "carname is required",
    }),
    priceWeekly: number({
      required_error: "priceWeekly is required",
    }),
    engine: string({
      required_error: "engine is required",
    }),
    brand: string({
      required_error: "brand is required",
    }),
    model: string({
      required_error: "model is required",
    }),
    modelNumber: string({
      required_error: "modelNumber is required",
    }),
    year: string({
      required_error: "year is required",
    }),
    power: string({
      required_error: "power is required",
    }),
    mileage: string({
      required_error: "mileage is required",
    }),
    colour: string({
      required_error: "colour is required",
    }),
    seats: string({
      required_error: "seats is required",
    }),
  }),
});
