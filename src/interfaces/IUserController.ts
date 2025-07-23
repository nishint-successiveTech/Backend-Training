import { Request, Response, NextFunction } from "express";

export interface IUserController {
  getUser(req: Request, res: Response): Response | void;
}
