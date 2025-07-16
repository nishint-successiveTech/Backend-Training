import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";

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
    jwt.verify(token, SECRET_KEY);
    console.log("TOKEN SUCCESSFULLY VERIFIED");
    next();
  } catch (e) {
    return next(new Error("WRONG TOKEN,PLEASE ENTER CORRECT DETAILS"));
  }
};
