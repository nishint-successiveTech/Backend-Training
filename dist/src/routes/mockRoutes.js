"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRouter = void 0;
const express_1 = require("express");
const mockController_1 = require("../controllers/mockController");
exports.mockRouter = (0, express_1.Router)();
exports.mockRouter.get("/mockList", mockController_1.getMockList);
exports.mockRouter.post("/seed", mockController_1.getSeedData);
//# sourceMappingURL=mockRoutes.js.map