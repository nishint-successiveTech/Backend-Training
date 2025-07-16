"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieRouter = void 0;
const express_1 = require("express");
const cookieController_1 = require("../controllers/cookieController");
const infoRequest_1 = require("../middleware/infoRequest");
exports.cookieRouter = (0, express_1.Router)();
exports.cookieRouter.get("/setCookie", infoRequest_1.infoRequest, cookieController_1.setCookie);
exports.cookieRouter.get("/getCookie", infoRequest_1.infoRequest, cookieController_1.getCookie);
exports.cookieRouter.get("/clearCookie", infoRequest_1.infoRequest, cookieController_1.clearCookie);
//# sourceMappingURL=cookieRoutes.js.map