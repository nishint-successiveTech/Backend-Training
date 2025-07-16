import { Router } from "express";
import {
  setCookie,
  getCookie,
  clearCookie,
} from "../controllers/cookieController";
import { infoRequest } from "../middleware/infoRequest";

export const cookieRouter = Router();
cookieRouter.get("/setCookie", infoRequest, setCookie);
cookieRouter.get("/getCookie", infoRequest, getCookie);
cookieRouter.get("/clearCookie", infoRequest, clearCookie);
