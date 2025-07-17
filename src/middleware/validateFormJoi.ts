import { Request, Response, NextFunction } from "express";
import Joi, { valid } from "joi";

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),

  email: Joi.string().email().required(),

  city:Joi.string().min(1).required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(/[A-Z]/, "uppercase letter")
    .pattern(/[a-z]/, "lowercase letter")
    .pattern(/[0-9]/, "number")
    .pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "special character")
    .required(),
});

export const validateFormJoi = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = userSchema.validate(req.body);
  if (validate.error) {
    return next(
      new Error(`Error occured here: ${validate.error.details[0].message}`)
    );
  }
  next();
};
