import { Router } from "express";
import { geoLocation } from "../controllers/geoLocation";
import { geoLocationMiddleware } from "../middleware/geoLocationMiddleware";

export const geoRouter = Router();

geoRouter.get("/india", geoLocationMiddleware, geoLocation);
