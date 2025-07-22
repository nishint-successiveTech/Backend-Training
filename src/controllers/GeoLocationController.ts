import { Request, Response } from "express";
import { IGeoLocationController } from "../interfaces/IGeoLocationController";

export class GeoLocationController implements IGeoLocationController {
  public geoLocation(req: Request, res: Response) {
    res.send("INDIAN,SUCCESSFULLY VERIFIED");
  }
}
