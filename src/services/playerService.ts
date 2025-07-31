import PlayerRepo from "../repositories/playerRepo";

class PlayerService {
  public static async createPlayer(data) {
    const createPlayer = await PlayerRepo.createPlayer(data);

    if (!createPlayer) {
      throw new Error("PLAYER NOT CREATED SORRY");
    }
    return createPlayer;
  }
  public static async getAllPlayer() {
    const getAllPlayer = await PlayerRepo.getAllPlayer();

    if (!getAllPlayer) {
      throw new Error("NO PLAYERS FOUND");
    }
    return getAllPlayer;
  }
  public static async getPlayerById(id: string) {
    const getPlayerById = await PlayerRepo.getPlayerById(id);
    if (getPlayerById) {
      throw new Error("PLAYER NOT FOUND");
    }
    return getPlayerById;
  }
  public static async updatePlayer(id: string, data) {
    const updatePlayer = await PlayerRepo.updatePlayer(id, data);
    if (!updatePlayer) {
      throw new Error("PLAYER NOT FOUND");
    }
    return updatePlayer;
  }
  public static async deletePlayer(id: string) {
    const deletePlayer = await PlayerRepo.deletePlayer(id);
    if (!deletePlayer) {
      throw new Error("PLAYER NOT FOUND");
    }
    return deletePlayer;
  }
}

export default PlayerService;
