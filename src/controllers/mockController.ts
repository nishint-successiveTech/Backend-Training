import { Request, Response } from "express";
import { mockArr } from "../utils/mockData";

export const getMockList = (req: Request, res: Response) => {
  res.json(mockArr);
};

export const getSeedData = (req: Request, res: Response) => {
  res.json({
    data: mockArr,
  });
};

