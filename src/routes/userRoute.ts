import { Router } from "express";
import UserController from "../controllers/userController";

class UserRoutes {
  public static userRoutes() {
    const router = Router();

    router.post("/register", UserController.register);
    router.post("/login",UserController.login)
    return router;
  }
}

export default UserRoutes;
