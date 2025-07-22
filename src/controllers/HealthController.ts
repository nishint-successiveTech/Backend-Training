import { Request, Response } from "express";
import axios from "axios";
import { IHealthController } from "../interfaces/IHealthController";

export class HealthController implements IHealthController {
  public async healthCheck(req: Request, res: Response) {
    const isHealthy = await this.getDataFromAPI();

    if (isHealthy) {
      res.status(200).json({
        status: "UP",
        message: "YES,ABLE TO ACCESS DATA FROM THAT API",
      });
    } else {
      res.status(503).json({
        status: "DOWN",
        message: "NO,NOT ABLE TO ACCESS DATA FROM THAT API",
      });
    }
  }
  public async getDataFromAPI() {
    try {
      const dataRes = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      return dataRes.status === 200;
    } catch (e) {
      return false;
    }
  }
}
