import { Router } from "express";
import { authenticate } from "../middleware/authentication";
import { infoRequest } from "../middleware/infoRequest";
import { anyError } from "../middleware/errorCatching";
import { MathController } from "../controllers/MathController";

const mathController = new MathController();
export const MathRouter = Router();
MathRouter.get(
  "/run/math",
  infoRequest,
  authenticate,
  mathController.runMathOperation.bind(mathController),
  anyError
);
