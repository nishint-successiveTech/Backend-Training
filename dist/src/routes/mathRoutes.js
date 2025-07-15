"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathRouter = void 0;
const express_1 = require("express");
const mathController_1 = require("../controllers/mathController");
const _authentication_1 = require("../middleware/ authentication");
exports.mathRouter = (0, express_1.Router)();
exports.mathRouter.get("/run/math", _authentication_1.authenticate, mathController_1.runMathOperation);
//# sourceMappingURL=mathRoutes.js.map