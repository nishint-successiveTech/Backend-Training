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

export const getUser2 = (req: Request, res: Response) => {
  const { username,email,password} = req.body;
  res.json({
    data:{
      Username:username,
      Email:email,
      Password:password
    }
  })
};
