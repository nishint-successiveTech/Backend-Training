import { Request, Response, NextFunction } from "express";
import { UserALoginService } from "../services/UserALoginService";

export const UserALoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const login = await UserALoginService(req.body);
    res.status(200).json(login);
  } catch (e) {
    next(e);
  }
};
