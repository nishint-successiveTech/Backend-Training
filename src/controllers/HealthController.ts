import { Request, Response } from "express";
import { IHealthController } from "../interfaces/IHealthController";

export class HealthController implements IHealthController {
  public healthCheck(req: Request, res: Response) {
    res.status(200).json({
      status: "UP",
      message: "YES,ABLE TO ACCESS DATA FROM THAT API",
    });
  }
}
