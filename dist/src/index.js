"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = require("./routes/authRoutes");
const mockRoutes_1 = require("./routes/mockRoutes");
const mathRoutes_1 = require("./routes/mathRoutes");
const cookieRoutes_1 = require("./routes/cookieRoutes");
const infoRequest_1 = require("./middleware/infoRequest");
const errorCatching_1 = require("./middleware/errorCatching");
const customHeader_1 = require("./middleware/customHeader");
const app = (0, express_1.default)();
const PORT = 9090;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, customHeader_1.addCustomHeader)("HEADER-123456"));
app.use(authRoutes_1.authRouter);
app.use(mockRoutes_1.mockRouter);
app.use(cookieRoutes_1.cookieRouter);
app.use(mathRoutes_1.mathRouter);
app.get("/", infoRequest_1.infoRequest, (req, res) => {
    res.send("WELCOME NISHINT");
});
app.use(errorCatching_1.anyError);
app.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map