"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.send("NO TOKEN PROVIDED,PLEASE PROVIDE THE TOKEN FIRST");
    }
    const token = authHeader.split(" ")[1];
    try {
        jsonwebtoken_1.default.verify(token, SECRET_KEY);
        console.log("TOKEN SUCCESSFULLY VERIFIED");
        next();
    }
    catch (e) {
        res.send("WRONG TOKEN,PLEASE ENTER CORRECT DETAILS");
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=%20authentication.js.map