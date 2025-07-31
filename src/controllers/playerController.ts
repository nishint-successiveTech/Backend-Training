import { get } from "http";
import PlayerService from "../services/playerService";
import { Request, Response } from "express";

class PlayerController {
  public static async createPlayer(req: Request, res: Response) {
    try {
      const createPlayer = await PlayerService.createPlayer(req.body);
      res.status(201).json({
        data: createPlayer,
      });
    } catch (e) {
      res.status(404).json({
        message: e.message,
      });
    }
  }
  public static async getAllPlayer(req: Request, res: Response) {
    try {
      const getAllPlayer = await PlayerService.getAllPlayer();
      res.status(200).json({
        data: getAllPlayer,
      });
    } catch (e) {
      res.status(404).json({
        message: e.message,
      });
    }
  }
  public static async getPlayerById(req: Request, res: Response) {
    try {
      const getPlayerById = await PlayerService.getPlayerById(req.params.id);
      res.status(200).json({ data: getPlayerById });
    } catch (e) {
      res.status(404).json({
        message: e.message,
      });
    }
  }
  public static async updatePlayer(req: Request, res: Response) {
    try {
      const updatePlayer = await PlayerService.updatePlayer(
        req.params.id,
        req.body
      );

      res.status(200).json({
        data: updatePlayer,
      });
    } catch (e) {
      res.status(404).json({
        message: e.message,
      });
    }
  }
  public static async deletePlayer(req: Request, res: Response) {
    try {
      const deletePlayer = await PlayerService.deletePlayer(req.params.id);
      res.status(200).json({
        message: "PLAYER IS DELETED",
        data: deletePlayer,
      });
    } catch (e) {
      res.status(404).json({
        message: e.message,
      });
    }
  }
}
export default PlayerController;
