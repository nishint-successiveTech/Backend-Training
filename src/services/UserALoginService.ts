import { UserAModel } from "../models/UserAModel";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import bcrypt from "bcrypt";

export const UserALoginService = async (data: any) => {
  const user = await UserAModel.findOne({ username: data.username });
  const { SECRET_KEY } = config;

  if (!user) {
    throw new Error("UserName Not Exist");
  }

  const validatePassword = await bcrypt.compare(data.password, user.password);
  if (!validatePassword) {
    throw new Error("Invalid password,Please Enter Correct Password");
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  return {
    message: "Login success",
    tokenIs: token,
  };
};
