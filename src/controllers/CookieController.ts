import { Request, Response } from "express";
import { ICookieController } from "../interfaces/ICookieController";
export class CookieController implements ICookieController {
  public setCookie(req: Request, res: Response) {
    res.cookie("user", "nishint");
    res.send("COOKIE SET SUCCESSFULLY");
  }

  public getCookie(req: Request, res: Response) {
    const userCookie = req.cookies["user"];
    if (!userCookie) {
      res.send("PLEASE SET COOKIE'S FIRST, NO COOKIES FOUND");
    }
    res.send(userCookie);
  }

  public clearCookie(req: Request, res: Response) {
    res.clearCookie("user");
    res.send("COOKIE CLEAR SUCCESSFULLY");
  }
}
