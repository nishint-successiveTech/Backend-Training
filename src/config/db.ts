import mongoose from "mongoose";
import { config } from "./config";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    process.exit(1);
  }
};
