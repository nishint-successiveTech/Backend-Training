"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoRequest = void 0;
const infoRequest = (req, res, next) => {
    const timeStamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timeStamp}]${method}${url}`);
    next();
};
exports.infoRequest = infoRequest;
//# sourceMappingURL=infoRequest.js.map