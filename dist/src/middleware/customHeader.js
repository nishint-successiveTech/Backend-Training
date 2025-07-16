"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomHeader = void 0;
const addCustomHeader = (value) => {
    return (req, res, next) => {
        res.setHeader("Custom-Header", value);
        next();
    };
};
exports.addCustomHeader = addCustomHeader;
//# sourceMappingURL=customHeader.js.map