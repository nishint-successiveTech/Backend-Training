import { Router } from "express";
import { sportsMiddleware } from "../middleware/sportsMiddleware";
import { SportsController } from "../controllers/SportsController";

const sportsController = new SportsController();
export const SportsRouter = Router();
SportsRouter.post(
  "/cricket",
  sportsMiddleware,
  sportsController.cricket.bind(sportsController)
);
SportsRouter.post(
  "/football",
  sportsMiddleware,
  sportsController.football.bind(sportsController)
);
SportsRouter.post(
  "/hockey",
  sportsMiddleware,
  sportsController.hockey.bind(sportsController)
);
