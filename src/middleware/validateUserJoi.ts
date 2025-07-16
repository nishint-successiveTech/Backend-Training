import { Request, Response, NextFunction } from "express";
import Joi, { valid } from "joi";

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email().required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const validateDataJoi = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = userSchema.validate(req.body);
  if(validate.error){
    return next(new Error(`Error occured here: ${validate.error.details[0].message}`))
  }
  next();
};
