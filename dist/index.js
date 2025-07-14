"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app1_1 = require("./src/app1");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mockData_1 = require("./src/mockData");
const app = (0, express_1.default)();
const port = 9090;
app.use((0, cookie_parser_1.default)());
app.get("/setCookie", (req, res) => {
    res.cookie("user", "nishint");
    res.send("COOKIE SET SUCCESSFULLY..");
});
app.get("/getCookie", (req, res) => {
    res.send(req.cookies.user);
});
app.get("/run/math", (req, res) => {
    (0, app1_1.performMathOperation)();
    res.send("PLEASE CHECK TERMINAL");
});
app.get("/mockList", (req, res) => {
    res.json(mockData_1.mockArr);
});
app.get("/", (req, res) => {
    res.send("HELLO NISHINT");
});
app.listen(port, () => {
    console.log(`SERVER SUCCESSFULLY RUNNING ON PORT ${port}`);
});
//# sourceMappingURL=index.js.map