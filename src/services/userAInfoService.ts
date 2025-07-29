import { findAllUser, findUserById } from "../repositories/UserAInfoRepo";

export const findAllUserService = async () => {
  return await findAllUser();
};

export const findUserByIdService = async (id: string) => {
  return await findUserById(id);
};
