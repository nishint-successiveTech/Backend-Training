import { UserAModel } from "../models/UserAModel";

export const findAllUser = async () => {
  return await UserAModel.find();
};

export const findUserById = async (id: string) => {
  return await UserAModel.findById(id);
};
