import { Router } from "express";

import { geoLocationMiddleware } from "../middleware/geoLocationMiddleware";
import { GeoLocationController } from "../controllers/GeoLocationController";

const geoLocationController = new GeoLocationController();
export const GeoLocationRouter= Router();

GeoLocationRouter.get(
  "/india",
  geoLocationMiddleware,
  geoLocationController.geoLocation.bind(geoLocationController)
);
