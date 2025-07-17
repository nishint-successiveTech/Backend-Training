import { Router } from "express";
import { registrationFormController } from "../controllers/registrationFormController";
import { validateFormJoi } from "../middleware/validateFormJoi";

export const formRouter = Router();

formRouter.post("/form",validateFormJoi,registrationFormController);
