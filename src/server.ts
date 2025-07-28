import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

import { AuthRouter } from "./routes/AuthRoutes";
import { MockRouter } from "./routes/MockRoutes";
import { MathRouter } from "./routes/MathRoutes";
import { CookieRouter } from "./routes/CookieRoutes";
import { infoRequest } from "./middleware/infoRequest";
import { anyError } from "./middleware/errorCatching";
import { addCustomHeader } from "./middleware/customHeader";
import { rateLimiter } from "./middleware/rateLimiter";
import { RegistrationFormRouter } from "./routes/RegistrationFormRoute";
import { queryValidator } from "./middleware/queryValidator";
import { GeoLocationRouter } from "./routes/GeoLocationRoute";
import { SportsRouter } from "./routes/SportsRoute";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import { ErrorShowRouter } from "./routes/ErrorShowRoute";
import { FetchAPIRouter } from "./routes/FetchAPIRoute";
import { userRouter } from "./routes/UserRoutes";
import { HealthRouter } from "./routes/HealthRoute";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(addCustomHeader("HEADER-123456"));
app.use(rateLimiter(1 * 60 * 1000, 10));

app.use(AuthRouter);
app.use(CookieRouter);
app.use(ErrorShowRouter);
app.use(FetchAPIRouter);
app.use(GeoLocationRouter);
app.use(HealthRouter);
app.use(MathRouter);
app.use(MockRouter);
app.use(RegistrationFormRouter);
app.use(SportsRouter);
app.use(userRouter);

app.get("/", infoRequest, queryValidator, (req: Request, res: Response) => {
  res.send("WELCOME NISHINT");
});

app.use(notFoundMiddleware);
app.use(anyError);

export default app;
