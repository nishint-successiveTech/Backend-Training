import { Router } from "express";
import { HealthController } from "../controllers/healthController";

export const healthRoute = Router();
const healthObj = new HealthController();

healthRoute.get("/health", healthObj.healthCheck.bind(healthObj));
