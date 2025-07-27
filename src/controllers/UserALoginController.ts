import { Request, Response } from "express";
import { UserALoginService } from "../services/UserALoginService";

export const UserALoginController = async (req: Request, res: Response) => {
  try {
    const login = await UserALoginService(req.body);
    res.status(200).json(login);
  } catch (e: any) {
    res.status(401).json({
      error: e.message,
    });
  }
};
