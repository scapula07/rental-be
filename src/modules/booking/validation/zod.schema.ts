import { object, string, number, date, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schema:
 *   CreateBookingInput:
 *    type: object
 *    required:
 *      - carId
 *      - userId
 *      - startDate
 *      - endDate
 *    properties:
 *      carId:
 *       type: string
 *       example: 60f1b2a7e6b0b71f0c9b4b7f
 *      userId:
 *       type: string,
 *       example: 60f1b2a7e6b0b71f0c9b4b7f
 *      startDate:
 *       type: string,
 *       example: 2021-07-17
 *      endDate:
 *       type: string,
 *       example: 2021-07-17
 */
export const CreateBookingSchema = object({
  body: object({
    carId: string({
      required_error: "carId is required",
    }),
    userId: string({
      required_error: "priceWeekly is required",
    }),
    startDate: string({
      required_error: "startDate is required",
    }),
    endDate: string({
      required_error: "endDate is required",
    }),
  }),
});
