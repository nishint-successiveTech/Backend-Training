import { Request, Response, NextFunction } from "express";

export const queryValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page } = req.query;

  if (page !== undefined && isNaN(Number(page))) {
    return next(new Error("IT IS NON-NUMERIC ,PLEASE ENTER THE NUMERIC VALUE"));
  }
  next();
};
