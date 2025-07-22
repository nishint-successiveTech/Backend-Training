import { Request, Response, NextFunction } from "express";

export interface IRegistrationFormController {
  cricket(req: Request, res: Response): Response | void;
  football(req: Request, res: Response): Response | void;
  hockey(req: Request, res: Response): Response | void;
}
