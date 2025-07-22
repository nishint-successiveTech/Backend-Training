import { Request, Response } from "express";

export interface ICookieController {
  setCookie(req: Request, res: Response): Response | void;
  getCookie(req: Request, res: Response): Response | void;
  clearCookie(req: Request, res: Response): Response | void;
}
