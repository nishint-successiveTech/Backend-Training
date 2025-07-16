import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { user, password } = req.body;

  if (user == "nishint" && password == "12345") {
    const token = jwt.sign({ user }, SECRET_KEY);
    return res.send("TOKEN SUCCESSFULLY GENERATED: " + "Bearer " + token);
  } else {
    return next(
      new Error("INVALID CREDENTIALS, USE CORRECT USERNAME AND PASSWORD")
    );
  }
};
