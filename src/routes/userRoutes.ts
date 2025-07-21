import { Router } from "express";
import { getUser, getUser2 } from "../controllers/userController";
import { validateUserQuery } from "../middleware/userMiddleware";
import { validateUserJoi } from "../middleware/validateUserJoi";

export const userRoutes = Router();
userRoutes.get("/parameter", validateUserQuery, getUser);
userRoutes.post("/joi", validateUserJoi, getUser2);
