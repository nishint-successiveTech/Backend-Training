import { Request, Response } from "express";
import { performMathOperation } from "../utils/app";

export const runMathOperation = (req: Request, res: Response) => {
  performMathOperation();
  res.send("PLEASE CHECK TERMINAL");
};
