import { UserARegistrationRepo } from "../repositories/UserARegistrationRepo";
import bcrypt from "bcrypt";

export const UserAService = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newData = {
    ...data,
    password: hashedPassword,
  };
  return await UserARegistrationRepo(newData);
};
