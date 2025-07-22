import { Request, Response } from "express";
import { mockArr } from "../utils/mockData";
import { IMockController } from "../interfaces/IMockController";

export class MockController implements IMockController {
  public getMockList(req: Request, res: Response) {
    res.json(mockArr);
  }

  public getSeedData(req: Request, res: Response) {
    res.json({
      data: mockArr,
    });
  }
}
