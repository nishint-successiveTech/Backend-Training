import PlayerService from "../services/playerService";
import { Request, Response, NextFunction } from "express";

class PlayerController {
  public static async createPlayer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const createPlayer = await PlayerService.createPlayer(req.body);
      res.status(201).json({
        data: createPlayer,
      });
    } catch (e) {
      next(e);
    }
  }

  public static async getAllPlayer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const getAllPlayer = await PlayerService.getAllPlayer();
      res.status(200).json({
        data: getAllPlayer,
      });
    } catch (e) {
      next(e);
    }
  }

  public static async getPlayerById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const getPlayerById = await PlayerService.getPlayerById(req.params.id.toString());
      res.status(200).json({ data: getPlayerById });
    } catch (e) {
      next(e);
    }
  }
  public static async updatePlayer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const updatePlayer = await PlayerService.updatePlayer(
        req.params.id,
        req.body
      );

      res.status(200).json({
        data: updatePlayer,
      });
    } catch (e) {
      next(e);
    }
  }
  public static async deletePlayer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const deletePlayer = await PlayerService.deletePlayer(req.params.id);
      res.status(200).json({
        message: "PLAYER IS DELETED",
        data: deletePlayer,
      });
    } catch (e) {
      next(e);
    }
  }
}
export default PlayerController;
