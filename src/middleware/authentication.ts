import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";
const users = [{ name: "nishint", password: "12345" }];

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new Error("NO TOKEN PROVIDED,PLEASE PROVIDE THE TOKEN FIRST"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { username: string };
    const user = users.find((u) => u.name === decoded.username);
    if (!user) {
      return next(
        new Error(`Invalid token user not found ${decoded.username}`)
      );
    }
    console.log("TOKEN SUCCESSFULLY VERIFIED");
    next();
  } catch (e) {
    return next(new Error("WRONG TOKEN,PLEASE ENTER CORRECT DETAILS"));
  }
};
