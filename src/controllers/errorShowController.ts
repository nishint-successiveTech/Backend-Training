import { Request, Response, NextFunction } from "express";

export class errorShowController {
  static badRequest(req: Request, res: Response, next: NextFunction) {
    return res.status(400).json({ message: "400 Bad Request: Invalid input." });
  }

  static unauthorized(req: Request, res: Response, next: NextFunction) {
    return res
      .status(401)
      .json({ message: "401 Unauthorized: Missing or invalid token." });
  }

  static forbidden(req: Request, res: Response, next: NextFunction) {
    return res
      .status(403)
      .json({ message: "403 Forbidden: You don't have permission." });
  }

  static notFound(req: Request, res: Response, next: NextFunction) {
    return res
      .status(404)
      .json({ message: `404 Not Found: ${req.originalUrl} does not exist.` });
  }

  static internalServerError(req: Request, res: Response, next: NextFunction) {
    return next(new Error("500 Internal Server Error: Something broke."));
  }

  static serviceUnavailable(req: Request, res: Response, next: NextFunction) {
    return res
      .status(503)
      .json({ message: "503 Service Unavailable: Please try again later." });
  }
}
