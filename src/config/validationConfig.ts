import Joi, { ObjectSchema } from "joi";

interface ValidityRoutes {
  [key: string]: ObjectSchema;
}

export const validityOnRoutes: ValidityRoutes = {
  "/cricket": Joi.object({
    runs: Joi.number().min(1).max(200).required(),
  }).unknown(),
  "/football": Joi.object({
    goals: Joi.number().min(0).max(5).required(),
  }).unknown(),
};
