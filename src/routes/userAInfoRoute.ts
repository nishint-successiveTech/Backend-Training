import {
  findAllUserController,
  findUserByIdController,
} from "../controllers/UserAInfoController";
import { Router } from "express";
import { authenticate2 } from "../middleware/authentication2";
import { authorizeRoleChecker } from "../middleware/roleCheckMiddleware";

export const userAInfoRoute = Router();

userAInfoRoute.get("/userAInfoAllUsers", authenticate2,authorizeRoleChecker(["ADMIN"]),findAllUserController);
userAInfoRoute.post("/findUserById", authenticate2,authorizeRoleChecker(["USER","ADMIN","DEVELOPER"]),findUserByIdController);
