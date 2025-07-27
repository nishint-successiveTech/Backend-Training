import { UserAModel } from "../models/UserAModel";

export const UserARegistrationRepo = async (data: any) => {
  const newUserA = new UserAModel(data);
  return await newUserA.save();
};
