import { Request, Response, NextFunction } from "express";

export interface IMockController {
  getMockList(req: Request, res: Response): Response | void;
  getSeedData(req: Request, res: Response): Response | void;
}
