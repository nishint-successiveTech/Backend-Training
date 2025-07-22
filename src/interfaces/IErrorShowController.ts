import { Request, Response, NextFunction } from "express";

export interface IErrorShowController {
  badRequest(req: Request, res: Response, next: NextFunction): Response | void;

  unauthorized(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
  forbidden(req: Request, res: Response, next: NextFunction): Response | void;

  notFound(req: Request, res: Response, next: NextFunction): Response | void;

  internalServerError(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;

  serviceUnavailable(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
}
