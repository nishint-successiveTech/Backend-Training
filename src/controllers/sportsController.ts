import { Request, Response } from "express";

export const cricket = (req: Request, res: Response) => {
  const { runs, goals, playerPlaying } = req.body;
  res.send(`CRICKET INFO: ${runs} ${goals} ${playerPlaying}`);
};

export const football = (req: Request, res: Response) => {
  const { runs, goals, playerPlaying } = req.body;
  res.send(`FOOTBALL INFO: ${runs} ${goals} ${playerPlaying}`);
};

export const hockey = (req: Request, res: Response) => {
  const { runs, goals, playerPlaying } = req.body;
  res.send(`HOCKEY INFO: ${runs} ${goals} ${playerPlaying}`);
};
