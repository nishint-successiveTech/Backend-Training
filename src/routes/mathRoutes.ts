import { Router } from "express";
import { runMathOperation } from "../controllers/mathController";
import { authenticate } from "../middleware/ authentication";
import { infoRequest } from "../middleware/infoRequest";
import { anyError } from "../middleware/errorCatching";

export const mathRouter = Router();
mathRouter.get(
  "/run/math",
  infoRequest,
  authenticate,
  runMathOperation,
  anyError
);
