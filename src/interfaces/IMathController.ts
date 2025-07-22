import { Request, Response, NextFunction } from "express";

export interface IMathController {
  runMathOperation(req: Request, res: Response): Response | void;
}
