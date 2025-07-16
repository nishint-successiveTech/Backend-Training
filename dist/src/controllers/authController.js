"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "NISHINT-GOYAL-SUCCESSIVE-TECH";
const login = (req, res, next) => {
    const { user, password } = req.body;
    if (user == "nishint" && password == "12345") {
        const token = jsonwebtoken_1.default.sign({ user }, SECRET_KEY);
        return res.send("TOKEN SUCCESSFULLY GENERATED: " + "Bearer " + token);
    }
    else {
        return next(new Error("INVALID CREDENTIALS, USE CORRECT USERNAME AND PASSWORD"));
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map