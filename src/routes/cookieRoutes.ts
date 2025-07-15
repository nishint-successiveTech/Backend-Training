import { Router } from "express";
import {
  setCookie,
  getCookie,
  clearCookie,
} from "../controllers/cookieController";

export const cookieRouter = Router();
cookieRouter.get("/setCookie", setCookie);
cookieRouter.get("/getCookie", getCookie);
cookieRouter.get("/clearCookie", clearCookie);
