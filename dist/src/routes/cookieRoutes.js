"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieRouter = void 0;
const express_1 = require("express");
const cookieController_1 = require("../controllers/cookieController");
exports.cookieRouter = (0, express_1.Router)();
exports.cookieRouter.get("/setCookie", cookieController_1.setCookie);
exports.cookieRouter.get("/getCookie", cookieController_1.getCookie);
exports.cookieRouter.get("/clearCookie", cookieController_1.clearCookie);
//# sourceMappingURL=cookieRoutes.js.map