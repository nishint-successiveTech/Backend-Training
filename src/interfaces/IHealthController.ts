import { Request, Response, NextFunction } from "express";

export interface IHealthController {
  healthCheck(req: Request, res: Response): Response | void;
}
