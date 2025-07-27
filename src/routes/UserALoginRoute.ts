import express from "express";
import { UserALoginController } from "../controllers/UserALoginController";

export const userALoginRouter = express.Router();

userALoginRouter.post("/loginUserA", UserALoginController);
