import { Request, Response } from "express";

export const registrationFormController = (req: Request, res: Response) => {
  const { username, email, city } = req.body;
  res.send(
    `FORM SUBMITTED SUCCESSFULLY \n YOUR FORM DATA IS \n Username:${username} \n Email:${email} \n City:${city}`
  );
};
