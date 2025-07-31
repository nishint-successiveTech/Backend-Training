import dotenv from "dotenv";
import PlayerRoutes from "./routes/playerRoute";
import Database from "./config/db";
import express, { Application } from "express";

dotenv.config();

class AppServer {
  private static app: Application;

  public static async start() {
    this.app = express();
    this.setUpMiddleware();
    await this.connectDatabase();
    this.setupRoutes();
    this.listen();
  }

  private static async connectDatabase() {
    await Database.connect();
  }
  private static listen() {
    const { PORT } = process.env || 9090;
    this.app.listen(PORT, () => {
      console.log("SERVER IS RUNNING ON PORT " + PORT);
    });
  }

  private static setupRoutes() {
    this.app.use("/api/players", PlayerRoutes.getRoutes());
  }
  private static setUpMiddleware() {
    this.app.use(express.json());
  }
}
export default AppServer;
