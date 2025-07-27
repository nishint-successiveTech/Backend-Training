import {
  findAllUserController,
  findUserByIdController,
} from "../controllers/UserAInfoController";
import { Router } from "express";
import { authenticate2 } from "../middleware/authentication2";
import { infoRequest } from "../middleware/infoRequest";

export const userAInfoRoute = Router();

userAInfoRoute.get("/userAInfoAllUsers", authenticate2, findAllUserController);
userAInfoRoute.post("/findUserById", authenticate2, findUserByIdController);
