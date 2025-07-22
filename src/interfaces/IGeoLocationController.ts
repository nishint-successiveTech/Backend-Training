import { Request, Response, NextFunction } from "express";

export interface IGeoLocationController {
  geoLocation(req: Request, res: Response): Response | void
}
