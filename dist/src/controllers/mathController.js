"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMathOperation = void 0;
const app_1 = require("../utils/app");
const runMathOperation = (req, res) => {
    (0, app_1.performMathOperation)();
    res.send("PLEASE CHECK TERMINAL");
};
exports.runMathOperation = runMathOperation;
//# sourceMappingURL=mathController.js.map