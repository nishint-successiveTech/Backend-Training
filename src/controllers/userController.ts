import UserService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Config from "../config/config";

class UserController {
  public static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw new Error("Username enter karo");
      }
      if (!password) {
        throw new Error("Password enter karo");
      }
      const createUser = await UserService.register(req.body);

      return res.status(201).json({
        message: "SUCCESSFULLY REGISTERED",
        data: createUser,
      });
    } catch (e) {
      next(e);
    }
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw new Error("Username enter karo");
      }
      if (!password) {
        throw new Error("Password enter karo");
      }
      const loginUser = await UserService.login(req.body);

      if (!loginUser) {
        throw new Error("Error in login");
      }

      const token = jwt.sign({ username: username }, Config.SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        data: loginUser,
        token: token,
      });
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
