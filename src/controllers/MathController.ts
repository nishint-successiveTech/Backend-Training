import { Request, Response } from "express";
import { performMathOperation } from "../utils/app";
import { IMathController } from "../interfaces/IMathController";

export class MathController implements IMathController{
  public runMathOperation(req: Request, res: Response) {
    performMathOperation();
    res.send("PLEASE CHECK TERMINAL");
  }
}
