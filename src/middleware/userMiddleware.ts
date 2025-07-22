import e, { Request, Response, NextFunction } from "express";
import Joi from "joi";

const userParameterJoi = Joi.object({
  username: Joi.string().min(3).required(),
  age: Joi.number().integer().min(18).required(),
}).options({ convert: true });

export const validateUserQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userParameterJoi.validate(req.query);

  if (error) {
    return next(new Error(error.message));
  }

  next();
};
