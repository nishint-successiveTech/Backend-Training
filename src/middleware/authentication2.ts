import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { UserAModel } from "../models/UserAModel";

const SECRET_KEY = "NISHINT";

export const authenticate2 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      errorIs:
        "NO TOKEN PROVIDED PLEASE PROVIDE THE TOKEN FIRST INSIDE BODY HEADERS",
    });
  }

  const tokenIs = authHeader.split(" ")[1];

  try {
    const jwtVerify = jwt.verify(tokenIs, SECRET_KEY) as {
      id: string;
      username: string;
    };

    const userExist = await UserAModel.findById(jwtVerify.id);

    if (!userExist) {
      return res.status(401).json({
        errorIs: "USER NO LONGER EXIST INSIDE DATABASE",
      });
    }

    next();
    return;
  } catch (e) {
    return res.status(401).json({
      errorIs: "TOKEN IS INVALID OR ALREADY EXPIRED PLEASE SEND CORRECT TOKEN",
    });
  }
};
