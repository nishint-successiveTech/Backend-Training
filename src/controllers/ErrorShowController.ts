import { Request, Response, NextFunction } from "express";
import { IErrorShowController } from "../interfaces/IErrorShowController";

export class ErrorShowController implements IErrorShowController {
  public badRequest(req: Request, res: Response, next: NextFunction) {
    return res.status(400).json({ message: "400 Bad Request: Invalid input." });
  }

  public unauthorized(req: Request, res: Response, next: NextFunction) {
    return res
      .status(401)
      .json({ message: "401 Unauthorized: Missing or invalid token." });
  }

  public forbidden(req: Request, res: Response, next: NextFunction) {
    return res
      .status(403)
      .json({ message: "403 Forbidden: You don't have permission." });
  }

  public notFound(req: Request, res: Response, next: NextFunction) {
    return res
      .status(404)
      .json({ message: `404 Not Found: ${req.originalUrl} does not exist.` });
  }

  public internalServerError(req: Request, res: Response, next: NextFunction) {
    return next(new Error("500 Internal Server Error: Something broke."));
  }

  public serviceUnavailable(req: Request, res: Response, next: NextFunction) {
    return res
      .status(503)
      .json({ message: "503 Service Unavailable: Please try again later." });
  }
}
