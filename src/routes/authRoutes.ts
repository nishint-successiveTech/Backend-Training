import { Router } from "express";
import { login } from "../controllers/authController";
import { infoRequest } from "../middleware/infoRequest";
import { validateUserJoi } from "../middleware/validateUserJoi";
import { validateLoginJoi } from "../middleware/validateLoginJoi";
import { anyError } from "../middleware/errorCatching";

export const authRouter = Router();

authRouter.post("/login", validateLoginJoi, infoRequest, login);
