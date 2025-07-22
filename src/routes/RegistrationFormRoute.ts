import { Router } from "express";
import { validateFormJoi } from "../middleware/validateFormJoi";
import { RegistrationFormController } from "../controllers/RegistrationFormController";

const registrationFormController = new RegistrationFormController();
export const RegistrationFormRouter = Router();

RegistrationFormRouter.post(
  "/form",
  validateFormJoi,
  registrationFormController.registrationForm.bind(registrationFormController)
);
