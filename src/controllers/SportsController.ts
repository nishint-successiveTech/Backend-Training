import { Request, Response } from "express";
import { ISportsController } from "../interfaces/ISportsController";

interface ISport {
  runs: string;
  goals: string;
  playerPlaying: string;
}
export class SportsController implements ISportsController {
  public cricket(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body as ISport;
    res.send(`CRICKET INFO: ${runs} ${goals} ${playerPlaying}`);
  }

  public football(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body as ISport;
    res.send(`FOOTBALL INFO: ${runs} ${goals} ${playerPlaying}`);
  }

  public hockey(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body as ISport;
    res.send(`HOCKEY INFO: ${runs} ${goals} ${playerPlaying}`);
  }
}
