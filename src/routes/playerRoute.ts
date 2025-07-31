import PlayerController from "../controllers/playerController";
import {Router} from "express";

class PlayerRoutes {
  public static getRoutes() {
    const router = Router();

    router.post("/createPlayer", PlayerController.createPlayer);
    router.get("/getAllPlayer", PlayerController.getAllPlayer);
    router.get("/getPlayerById/:id", PlayerController.getPlayerById);
    router.put("/updatePlayer/:id", PlayerController.updatePlayer);
    router.delete("/deletePlayer/:id", PlayerController.deletePlayer);

    return router;
  }
}

export default PlayerRoutes;
