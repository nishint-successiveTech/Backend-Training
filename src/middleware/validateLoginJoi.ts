import { Request, Response, NextFunction } from "express";
import Joi, { valid } from "joi";

const userSchema = Joi.object({
  user: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const validateLoginJoi = (
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
