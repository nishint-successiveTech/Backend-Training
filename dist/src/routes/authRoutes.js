"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const infoRequest_1 = require("../middleware/infoRequest");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/login", infoRequest_1.infoRequest, authController_1.login);
//# sourceMappingURL=authRoutes.js.map