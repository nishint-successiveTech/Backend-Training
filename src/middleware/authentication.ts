import Config from "../config/config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import PlayerEntity from "../entities/playerEntity";
class Authentication {
  public static async authentication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const authheader = req.headers.authorization;

      if (!authheader) {
        throw new Error("NO TOKEN PROVIDED");
      }
      const token = authheader.split(" ")[1];
      const verify = jwt.verify(token, Config.SECRET_KEY) as {
        username: string;
      };
    //   console.log(verify.username)
    //   const userExist = await PlayerEntity.findOne({name:verify.username});
    //   if (!userExist) {
    //     throw new Error("THIS USER NOT EXIST SORRY");
    //   }
    next();
    } catch (e) {
      next(e);
    }
  }
}
export default Authentication;
