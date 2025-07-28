import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env["MONGO_URI"];
const PORT = process.env["PORT"];

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

if (!PORT) {
  throw new Error("Missing PORT in environment variables");
}

export const config = {
  MONGO_URI,
 PORT: Number(PORT),
};
