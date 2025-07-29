import { Request, Response,NextFunction } from "express";
import {
  findAllUserService,
  findUserByIdService,
} from "../services/userAInfoService";

export const findAllUserController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const allUser = await findAllUserService();
    return res.status(200).json({
      message: "ALL USER FETECHED SUCCESSFULLY",
      status: 200,
      data: {
        allUser,
      },
    });
  } catch (e) {
      next(e)
  }
};

export const findUserByIdController = async (req: Request, res: Response,next:NextFunction) => {
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
  } catch (error) {
    next(error)
  }
  return;
};
