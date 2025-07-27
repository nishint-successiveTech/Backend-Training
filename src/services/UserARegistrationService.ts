import { UserARegistrationRepo } from "../repositories/UserARegistrationRepo";

export const UserAService = async (data: any) => {
  return await UserARegistrationRepo(data);
};
