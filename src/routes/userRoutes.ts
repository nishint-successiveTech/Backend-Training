import { Router } from "express";
import { getUser } from "../controllers/userController";
import { validateUserQuery } from "../middleware/userMiddleware";

export const userRoutes = Router();
userRoutes.get("/parameter", validateUserQuery, getUser);
