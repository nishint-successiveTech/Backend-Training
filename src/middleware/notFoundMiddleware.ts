import { Request, Response, NextFunction } from "express";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = req.originalUrl;
  return next(new Error(`ROUTE NOT FOUND ${url} PLEASE ENTER CORRECT ROUTE`));
};
