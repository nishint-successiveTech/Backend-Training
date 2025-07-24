import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env["MONGO_URI"] as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    process.exit(1);
  }
};
