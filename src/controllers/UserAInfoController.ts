import { Request, Response } from "express";
import {
  findAllUserService,
  findUserByIdService,
} from "../services/userAInfoService";

export const findAllUserController = async (req: Request, res: Response) => {
  try {
    const allUser = await findAllUserService();
    return res.status(200).json({
      message: "ALL USER FETECHED SUCCESSFULLY",
      status: 200,
      data: {
        allUser,
      },
    });
  } catch (e: any) {
    return res.status(500).json({
      message: "FAILED TO FETCH ALL USERS",
      status: 500,
      data: {},
    });
  }
};

export const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const oneUser = await findUserByIdService(body.id);
    if (!oneUser) {
      return res.status(404).json({
        message: "USER NOT FOUND",
        status: 404,
        data: oneUser,
      });
    }
    return res.status(200).json({
      message: "USER FETCHED SUCCESSFULLY",
      status: 200,
      data: oneUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "FAILED TO FETCH USER",
      status: 500,
      data: {},
    });
  }
  return;
};
