import { Router } from "express";
import { runMathOperation } from "../controllers/mathController";
import { authenticate } from "../middleware/ authentication";

export const mathRouter = Router();
mathRouter.get("/run/math", authenticate, runMathOperation);
