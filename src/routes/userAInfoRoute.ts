import {
  findAllUserController,
  findUserByIdController,
} from "../controllers/UserAInfoController";
import { Router } from "express";
import { authenticate2 } from "../middleware/authentication2";
import { authorizeRoleChecker } from "../middleware/roleCheckMiddleware";
import { USER_ROLES } from "../models/userRoles";

export const userAInfoRoute = Router();

userAInfoRoute.get(
  "/userAInfoAllUsers",
  authenticate2,
  authorizeRoleChecker([USER_ROLES[1]]),
  findAllUserController
);
userAInfoRoute.post(
  "/findUserById",
  authenticate2,
  authorizeRoleChecker(USER_ROLES),
  findUserByIdController
);
