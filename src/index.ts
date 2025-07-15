import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoutes";
import { mockRouter } from "./routes/mockRoutes";
import { mathRouter } from "./routes/mathRoutes";
import { cookieRouter } from "./routes/cookieRoutes";

const app = express();
const PORT = 9090;

app.use(cookieParser());
app.use(express.json());

app.use(authRouter);
app.use(mockRouter);
app.use(cookieRouter);
app.use(mathRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("WELCOME NISHINT");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED SUCCESSFULLY ON PORT ${PORT}`);
});
