import { Request, Response, NextFunction } from "express";
import { validityOnRoutes } from "../config/validationConfig";

export const sportsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const route = validityOnRoutes[req.path];

  if (!route) {
    return next();
  }

  const { error } = route.validate(req.body);

  if (error) {
    return next(new Error(error.message));
  }
  next();
};
