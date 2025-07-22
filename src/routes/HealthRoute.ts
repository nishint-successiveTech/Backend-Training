import { Router } from "express";
import { HealthController } from "../controllers/HealthController";

export const HealthRouter = Router();
const healthObj = new HealthController();

HealthRouter.get("/health", healthObj.healthCheck.bind(healthObj));
