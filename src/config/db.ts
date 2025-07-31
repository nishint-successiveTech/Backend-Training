import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class Database {
  public static async connect() {
    try {
      await mongoose.connect(process.env["MONGO_URL"] as string);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (e: any) {
      //   throw new Error(e.message);
      console.error("DB NOT CONNECTED: " + e.message);
    }
  }
}

export default Database;
