import { Router } from "express";
import { login } from "../controllers/authController";
import { infoRequest } from "../middleware/infoRequest";
import { error } from "console";
import { anyError } from "../middleware/errorCatching";

export const authRouter = Router();

authRouter.post("/login", infoRequest, login);
