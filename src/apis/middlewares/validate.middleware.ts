import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import InvalidInputException from "../../exception/InvalidInput";
import HttpException from "../../exception/HttpException";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Check if req.body is empty
      if (Object.keys(req.body).length === 0) {
        throw next(new InvalidInputException("No data provided"));
      }

      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (err: any) {
      if (err instanceof ZodError) {
        const returnMessage = new InvalidInputException();
        return res.status(400).json({
          status: returnMessage.status,
          message: returnMessage.message,
          error: err.errors,
        });
      }
      next(err);
    }
  };
