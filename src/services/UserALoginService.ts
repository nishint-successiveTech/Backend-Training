import { UserAModel } from "../models/UserAModel";
import jwt from "jsonwebtoken";

export const UserALoginService = async (data: any) => {
  const user = await UserAModel.findOne({ username: data.username });

  if (!user) {
    throw new Error("UserName Not Exist");
  }

  if (user.password != data.password) {
    throw new Error("Invalid password,Please Enter Correct Password");
  }

  const token = jwt.sign({ id: user._id, username: user.username }, "NISHINT", {
    expiresIn: "1h",
  });

  return {
    message: "Login success",
    tokenIs: token,
  };
};
