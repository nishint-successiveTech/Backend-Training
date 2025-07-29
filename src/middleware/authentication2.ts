import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { UserAModel } from "../models/UserAModel";

const { SECRET_KEY } = config;

export const authenticate2 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader) {
      throw new Error("NO TOKEN PROVIDED ,PLEASE PROVIDE THE TOKEN FIRST");
    }

    const tokenIs = authHeader.split(" ")[1];

    const jwtVerify = jwt.verify(tokenIs, SECRET_KEY) as {
      id: string;
      username: string;
    };

    const userExist = await UserAModel.findById(jwtVerify.id);

    if (!userExist) {
      throw new Error("NO USER EXIST");
    }

    next();
  } catch (e) {
    next(e);
  }
};
