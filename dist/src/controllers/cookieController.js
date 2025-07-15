"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCookie = exports.getCookie = exports.setCookie = void 0;
const setCookie = (req, res) => {
    res.cookie("user", "nishint");
    res.send("COOKIE SET SUCCESSFULLY");
};
exports.setCookie = setCookie;
const getCookie = (req, res) => {
    if (!req.cookies.user) {
        return res.send("PLEASE SET COOKIE'S FIRST, NO COOKIES FOUND");
    }
    res.send(req.cookies.user);
};
exports.getCookie = getCookie;
const clearCookie = (req, res) => {
    res.clearCookie("user");
    res.send("COOKIE CLEAR SUCCESSFULLY");
};
exports.clearCookie = clearCookie;
//# sourceMappingURL=cookieController.js.map