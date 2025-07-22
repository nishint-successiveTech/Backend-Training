import { Request, Response, NextFunction } from "express";

export interface IRegistrationFormController {
  registrationForm(req: Request, res: Response): Response | void;
}
