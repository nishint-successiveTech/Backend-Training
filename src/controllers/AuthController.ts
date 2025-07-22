import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IAuthController } from "../interfaces/IAuthController";

export class AuthController implements IAuthController {
  private SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";
  private users = [{ name: "nishint", password: "12345" }];

  public login(req: Request, res: Response, next: NextFunction) {
    const { user, password } = req.body;
    const checking = this.users.find(
      (u) => u.name === user && u.password === password
    );

    if (checking) {
      const token = jwt.sign({ user }, this.SECRET_KEY, { expiresIn: "1h" });
      return res.send("TOKEN SUCCESSFULLY GENERATED: " + "Bearer " + token);
    } else {
      return next(
        new Error("INVALID CREDENTIALS, USE CORRECT USERNAME AND PASSWORD")
      );
    }
  }
}
