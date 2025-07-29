import express from "express";
import { UserARegistrationController } from "../controllers/UserARegistrationController";

export const userARouter = express.Router();

userARouter.post("/registerUserA", UserARegistrationController);
