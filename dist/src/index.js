"use strict";
// import express, { Request, Response } from "express";
// import { performMathOperation } from "./utils/app";
// import cookieParser from "cookie-parser";
// import { mockArr } from "./mockData";
// import { authenticate } from "./middleware/ authentication";
// import jwt from "jsonwebtoken";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = 9090;
// const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";
// app.use(cookieParser());
// app.use(express.json());
// app.get("/setCookie", (req: Request, res: Response) => {
//   res.cookie("user", "nishint");
//   res.send("COOKIE SET SUCCESSFULLY..");
// });
// app.get("/getCookie", (req: Request, res: Response) => {
//   if (!req.cookies.user)
//     return res.send("PLEASE SET COOKIE'S FIRST,NO COOKIES FOUND");
//   res.send(req.cookies.user);
// });
// app.get("/clearCookie", (req: Request, res: Response) => {
//   res.clearCookie("user");
//   res.send("COOKIE CLEAR SUCCESSFULLY");
// });
// app.get("/run/math", (req: Request, res: Response) => {
//   performMathOperation();
//   res.send("PLEASE CHECK TERMINAL");
// });
// app.get("/mockList", authenticate, (req: Request, res: Response) => {
//   res.json(mockArr);
// });
// app.get("/", (req: Request, res: Response) => {
//   res.send("HELLO NISHINT");
// });
// app.post("/login", (req: Request, res: Response) => {
//   const { user, password } = req.body;
//   if (user == "nishint" && password == "12345") {
//     const token = jwt.sign({ user }, SECRET_KEY);
//     return res.send("TOKEN SUCCESSFULLY GENERATED: " + "Bearer " + token);
//   } else {
//     res.send("INVALID CREDIT");
//   }
// });
// app.post("/seed", (req: Request, res: Response) => {
//   res.json({
//     data: mockArr,
//   });
// });
// app.listen(port, () => {
//   console.log(`SERVER SUCCESSFULLY RUNNING ON PORT ${port}`);
// });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = require("./routes/authRoutes");
const mockRoutes_1 = require("./routes/mockRoutes");
const mathRoutes_1 = require("./routes/mathRoutes");
const cookieRoutes_1 = require("./routes/cookieRoutes");
const app = (0, express_1.default)();
const PORT = 9090;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(authRoutes_1.authRouter);
app.use(mockRoutes_1.mockRouter);
app.use(cookieRoutes_1.cookieRouter);
app.use(mathRoutes_1.mathRouter);
app.get("/", (req, res) => {
    res.send("WELCOME NISHINT");
});
app.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map