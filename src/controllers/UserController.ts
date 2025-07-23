import { Request, Response } from "express";
import { IUserController } from "../interfaces/IUserController";

export class UserController implements IUserController {
  getUser(req: Request, res: Response) {
    const username = req.query["username"] as string;
    const age = req.query["age"] ? Number(req.query["age"]) : undefined;
    res.json({
      status: "success",
      data: {
        username,
        age,
      },
    });
  }
}
