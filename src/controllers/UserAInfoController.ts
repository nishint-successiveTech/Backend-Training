import { Request, Response } from "express";
import {
  findAllUserService,
  findUserByIdService,
} from "../services/userAInfoService";

export const findAllUserController = async (req: Request, res: Response) => {
  try {
    const allUser = await findAllUserService();
    return res.status(200).json({
      messageIs: "ALL USER FETECHED SUCCESSFULLY",
      allUserIs: allUser,
    });
  } catch (e: any) {
    return res.status(500).json({
      errorIs: e.message,
    });
  }
};

export const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const oneUser = await findUserByIdService(body.id);
    if (oneUser == null) {
      throw new Error("USER NOT EXIST");
    }
    return res.status(200).json({
      messageIs: "FETCH SUCCESS",
      data: oneUser,
    });
  } catch (error: any) {
    res.status(500).json({
      errorIs: error.message,
    });
  }
  return;
};
