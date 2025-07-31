import Config from "./config";
import mongoose from "mongoose";

class Database {
  public static async connect() {
    try {
      await mongoose.connect(Config.MONGO_URL);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (e: any) {
      console.error("DB NOT CONNECTED: " + e.message);
    }
  }
}

export default Database;
