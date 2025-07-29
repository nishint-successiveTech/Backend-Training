import dotenv from "dotenv";
dotenv.config();

export const config = Object.freeze({
  MONGO_URI: process.env["MONGO_URI"] || "",
  PORT: process.env["PORT"] || "",
});
