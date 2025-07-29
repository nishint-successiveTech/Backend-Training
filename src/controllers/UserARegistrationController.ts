import { Request, Response, NextFunction } from "express";
import { UserAService } from "../services/UserARegistrationService";

export const UserARegistrationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userA = await UserAService(req.body);
    res.status(201).json(userA);
  } catch (e) {
    next(e);
  }
};
