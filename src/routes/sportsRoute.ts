import { Router } from "express";
import { cricket, football,hockey} from "../controllers/sportsController";
import { sportsMiddleware } from "../middleware/sportsMiddleware";

export const sportsRoute = Router();
sportsRoute.post("/cricket", sportsMiddleware, cricket);
sportsRoute.post("/football", sportsMiddleware, football);
sportsRoute.post("/hockey", sportsMiddleware,hockey);
