import PlayerController from "../controllers/playerController";
import { Router } from "express";
import Authentication from "../middleware/authentication";

class PlayerRoutes {
  public static getRoutes() {
    const router = Router();

    router.post("/createPlayer",PlayerController.createPlayer);
    router.get("/getAllPlayer", Authentication.authentication,PlayerController.getAllPlayer);
    
    router.get("/getPlayerById/:id", PlayerController.getPlayerById);
    router.put("/updatePlayer/:id", PlayerController.updatePlayer);
    router.delete("/deletePlayer/:id", PlayerController.deletePlayer);

    return router;
  }
}

export default PlayerRoutes;
