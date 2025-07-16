import { Router } from "express";
import { joiValidator } from "../controllers/joiValidator";
import { validateDataJoi } from "../middleware/validateUserJoi";

export const joiRouter = Router();

joiRouter.post("/joiValidator", validateDataJoi, joiValidator);
