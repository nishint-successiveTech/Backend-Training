import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  const username = req.query.username as string;
  const age = req.query.age ? Number(req.query.age) : undefined;
  res.json({
    status: "success",
    data: {
      username,
      age,
    },
  });
};
