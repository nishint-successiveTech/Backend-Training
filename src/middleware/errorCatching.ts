import { Request, Response, NextFunction } from "express";

export const anyError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error", error.message);

  res.status(400).json({
    success: false,
    message: error.message || "Something went wrong",
  });
};
