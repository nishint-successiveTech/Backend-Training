import dotenv from "dotenv";
dotenv.config();

class Config {
  public static readonly MONGO_URL: string = process.env["MONGO_URL"] || "";
  public static readonly PORT: string = process.env["PORT"] || "";
  public static readonly SECRET_KEY: string = process.env["SECRET_KEY"] || "";

  public static getConfigObject() {
    return {
      MONGO_URL: this.MONGO_URL,
      PORT: this.PORT,
      SECRET_KEY: this.SECRET_KEY,
    };
  }
}

export default Config;
