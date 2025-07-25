import { Request, Response } from "express";
import { CricketService } from "../services/CricketService";

export const CricketController = async (req: Request, res: Response) => {
  try {
    const player = await CricketService(req.body);
    res.status(201).json(player);
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
};
