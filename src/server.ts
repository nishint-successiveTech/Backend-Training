import Config from "./config/config";
import PlayerRoutes from "./routes/playerRoute";
import Database from "./config/db";
import express, { Application } from "express";
import ErrorMiddleware from "./middleware/errorHandlerMiddleware";
import UserRoutes from "./routes/userRoute";
import RateLimiter from "./middleware/rateLimit";

class AppServer {
  private static app: Application;

  public static async start() {
    this.app = express();
    await this.connectDatabase();
    this.setUpMiddleware();
    this.setupRoutes();
    this.setUpErrorMiddleware();
    this.listen();
  }

  private static async connectDatabase() {
    await Database.connect();
  }

  private static listen() {
    const PORT = Config.PORT || 9090;
    this.app.listen(PORT, () => {
      console.log("SERVER IS RUNNING ON PORT " + PORT);
    });
  }

  private static setupRoutes() {
    this.app.use("/api/players", PlayerRoutes.getRoutes());
    this.app.use("/api/users", UserRoutes.userRoutes());
  }

  private static setUpMiddleware() {
    this.app.use(express.json());
    this.app.use(RateLimiter.getRateLimiter(15 * 60 * 1000, 30));
  }

  private static setUpErrorMiddleware() {
    this.app.use(ErrorMiddleware.errorHandler);
  }
}
export default AppServer;
