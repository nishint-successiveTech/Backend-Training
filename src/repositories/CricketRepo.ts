import { Cricket } from "../models/CricketModel";

export const CricketRepo = async (data: any) => {
  const newPlayer = new Cricket(data);
  return await newPlayer.save();
};
