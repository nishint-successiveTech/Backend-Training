import { Request, Response, NextFunction } from "express";

export const infoRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timeStamp: string = new Date().toLocaleString();
  const method: string = req.method;
  const url: string = req.url;
  console.log(`[${timeStamp}]${method}${url}`);
  next();
};
