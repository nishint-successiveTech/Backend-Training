import { Router } from "express";
import { CookieController } from "../controllers/CookieController";
import { infoRequest } from "../middleware/infoRequest";

const cookieController = new CookieController();
export const CookieRouter = Router();
CookieRouter.get(
  "/setCookie",
  infoRequest,
  cookieController.setCookie.bind(cookieController)
);
CookieRouter.get(
  "/getCookie",
  infoRequest,
  cookieController.getCookie.bind(cookieController)
);
CookieRouter.get(
  "/clearCookie",
  infoRequest,
  cookieController.clearCookie.bind(cookieController)
);
