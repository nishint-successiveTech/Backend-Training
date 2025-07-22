import { Request,Response } from "express";

export const setCookie = (req: Request, res: Response) => {
  res.cookie("user", "nishint");
  res.send("COOKIE SET SUCCESSFULLY");
};

export const getCookie = (req: Request, res: Response) => {
  if (!req.cookies.user) {
    res.send("PLEASE SET COOKIE'S FIRST, NO COOKIES FOUND");
  }
  res.send(req.cookies.user);
};

export const clearCookie = (req: Request, res: Response) => {
  res.clearCookie("user");
  res.send("COOKIE CLEAR SUCCESSFULLY");
};
