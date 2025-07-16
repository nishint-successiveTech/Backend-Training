"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyError = void 0;
const anyError = (error, req, res, next) => {
    res.status(400).json({
        success: false,
        message: error.message || "Something went wrong",
    });
};
exports.anyError = anyError;
//# sourceMappingURL=errorCatching.js.map