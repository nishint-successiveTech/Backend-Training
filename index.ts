import express, { Request, Response } from "express";
import { performMathOperation } from "./src/app";
import cookieParser from "cookie-parser";
import { mockArr } from "./src/mockData";

const app = express();
const port = 9090;

app.use(cookieParser());

app.get("/setCookie", (req: Request, res: Response) => {
  res.cookie("user", "nishint");
  res.send("COOKIE SET SUCCESSFULLY..");
});
app.get("/getCookie", (req: Request, res: Response) => {
  if (!req.cookies.user)
    return res.send("PLEASE SET COOKIE'S FIRST,NO COOKIES FOUND");
  res.send(req.cookies.user);
});
app.get("/clearCookie", (req: Request, res: Response) => {
  res.clearCookie("user");
  res.send("COOKIE CLEAR SUCCESSFULLY");
});

app.get("/run/math", (req: Request, res: Response) => {
  performMathOperation();
  res.send("PLEASE CHECK TERMINAL");
});

app.get("/mockList", (req: Request, res: Response) => {
  res.json(mockArr);
});

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO NISHINT");
});

app.listen(port, () => {
  console.log(`SERVER SUCCESSFULLY RUNNING ON PORT ${port}`);
});

