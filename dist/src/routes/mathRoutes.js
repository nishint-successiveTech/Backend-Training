"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathRouter = void 0;
const express_1 = require("express");
const mathController_1 = require("../controllers/mathController");
const _authentication_1 = require("../middleware/ authentication");
const infoRequest_1 = require("../middleware/infoRequest");
const errorCatching_1 = require("../middleware/errorCatching");
exports.mathRouter = (0, express_1.Router)();
exports.mathRouter.get("/run/math", infoRequest_1.infoRequest, _authentication_1.authenticate, mathController_1.runMathOperation, errorCatching_1.anyError);
//# sourceMappingURL=mathRoutes.js.map