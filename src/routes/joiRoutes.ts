import { Router } from "express";
import { joiValidator } from "../controllers/joiValidator";
import { validateUserJoi } from "../middleware/validateUserJoi";

export const joiRouter = Router();

joiRouter.post("/joiValidator", validateUserJoi,joiValidator);
