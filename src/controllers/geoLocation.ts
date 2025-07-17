import { Request, Response } from "express";

export const geoLocation = (req: Request, res: Response) => {
  res.send("INDIAN,SUCCESSFULLY VERIFIED");
};
