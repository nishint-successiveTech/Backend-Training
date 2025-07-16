import { Request, Response } from "express";

export const joiValidator = (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  res.send(`${username} ${email} ${password}`);
};
