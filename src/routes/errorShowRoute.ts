import { Router } from "express";
import { errorShowController } from "../controllers/errorShowController";

export const errorShowRoute = Router();

errorShowRoute.get("/400", errorShowController.badRequest);
errorShowRoute.get("/401", errorShowController.unauthorized);
errorShowRoute.get("/403", errorShowController.forbidden);
errorShowRoute.get("/404", errorShowController.notFound);
errorShowRoute.get("/500", errorShowController.internalServerError);
errorShowRoute.get("/503", errorShowController.serviceUnavailable);
