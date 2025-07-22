import { Router } from "express";
import { infoRequest } from "../middleware/infoRequest";
import { validateLoginJoi } from "../middleware/validateLoginJoi";
import { AuthController } from "../controllers/AuthController";

const authController = new AuthController();
export const AuthRouter = Router();

AuthRouter.post(
  "/login",
  validateLoginJoi,
  infoRequest,
  authController.login.bind(authController)
);
