import { Router } from "express";
import { validateUserQuery } from "../middleware/userMiddleware";
import { UserController } from "../controllers/UserController";

const userController = new UserController();
export const userRouter = Router();
userRouter.get(
  "/parameter",
  validateUserQuery,
  userController.getUser.bind(userController)
);
