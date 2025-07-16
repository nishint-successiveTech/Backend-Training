import { Request, Response, NextFunction } from "express";

export const addCustomHeader = (value: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Custom-Header", value);
    next();
  };
};
