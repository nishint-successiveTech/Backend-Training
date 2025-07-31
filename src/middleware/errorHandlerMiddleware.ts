import { Request, Response, NextFunction } from "express";

class ErrorMiddleware {
  public static errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.error("Error Caught", err.message);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
      success: false,
      message: message,
    });
  }
}

export default ErrorMiddleware;
