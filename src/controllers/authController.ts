import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";

export const login = (req: Request, res: Response) => {
  const { user, password } = req.body;

  if (user == "nishint" && password == "12345") {
    const token = jwt.sign({ user }, SECRET_KEY);
    return res.send("TOKEN SUCCESSFULLY GENERATED: " + "Bearer " + token);
  } else {
    res.send("INVALID CREDIT");
  }
};
