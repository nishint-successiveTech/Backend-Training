import { Request, Response } from "express";
import { UserAService } from "../services/UserARegistrationService";

export const UserARegistrationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userA = await UserAService(req.body);
    res.status(201).json(userA);
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
};
