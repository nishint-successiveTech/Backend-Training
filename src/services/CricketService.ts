import { CricketRepo } from "../repositories/CricketRepo";

export const CricketService = async (data: any) => {
  return await CricketRepo(data);
};
