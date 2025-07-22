import { Request, Response } from "express";
export class SportsController {
  public cricket(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body;
    res.send(`CRICKET INFO: ${runs} ${goals} ${playerPlaying}`);
  }

  public football(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body;
    res.send(`FOOTBALL INFO: ${runs} ${goals} ${playerPlaying}`);
  }

  public hockey(req: Request, res: Response) {
    const { runs, goals, playerPlaying } = req.body;
    res.send(`HOCKEY INFO: ${runs} ${goals} ${playerPlaying}`);
  }
}
