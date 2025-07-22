import { Router } from "express";
import { ErrorShowController } from "../controllers/ErrorShowController";

const errorShowController = new ErrorShowController();
export const ErrorShowRouter = Router();

ErrorShowRouter.get(
  "/400",
  errorShowController.badRequest.bind(errorShowController)
);
ErrorShowRouter.get(
  "/401",
  errorShowController.unauthorized.bind(errorShowController)
);
ErrorShowRouter.get(
  "/403",
  errorShowController.forbidden.bind(errorShowController)
);
ErrorShowRouter.get(
  "/404",
  errorShowController.notFound.bind(errorShowController)
);
ErrorShowRouter.get(
  "/500",
  errorShowController.internalServerError.bind(errorShowController)
);
ErrorShowRouter.get(
  "/503",
  errorShowController.serviceUnavailable.bind(errorShowController)
);
