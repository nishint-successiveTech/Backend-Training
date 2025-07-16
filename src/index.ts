import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoutes";
import { mockRouter } from "./routes/mockRoutes";
import { mathRouter } from "./routes/mathRoutes";
import { cookieRouter } from "./routes/cookieRoutes";
import { infoRequest } from "./middleware/infoRequest";
import { anyError } from "./middleware/errorCatching";
import { addCustomHeader } from "./middleware/customHeader";
import { rateLimiter } from "./middleware/rateLimiter";
import { joiRouter } from "./routes/joiRoutes";

const app = express();
const PORT = 9090;

app.use(cookieParser());
app.use(express.json());
app.use(addCustomHeader("HEADER-123456"));
app.use(rateLimiter(1 * 60 * 1000, 3));

app.use(authRouter);
app.use(mockRouter);
app.use(cookieRouter);
app.use(mathRouter);
app.use(joiRouter);

app.get("/", infoRequest, (req: Request, res: Response) => {
  res.send("WELCOME NISHINT");
});

app.use(anyError);

app.listen(PORT, () => {
  console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
});
