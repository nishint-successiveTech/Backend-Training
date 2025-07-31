import PlayerEntity from "../entities/playerEntity";

class PlayerRepo {
  public static async getAllPlayer() {
    return await PlayerEntity.find();
  }
  public static async getPlayerById(id: string) {
    return await PlayerEntity.findOne({id:id});
  }
  public static async createPlayer(data) {
    const playerExist = await PlayerEntity.findOne({ name: data.name });
    if (playerExist) {
      throw new Error("PLAYER ALREADY EXIT");
    }

    return await PlayerEntity.create(data);
  }
  public static async updatePlayer(id: string, data) {
    return await PlayerEntity.findByIdAndUpdate(id, data, { new: true });
  }
  public static async deletePlayer(id: string) {
    return await PlayerEntity.findByIdAndDelete(id);
  }
}

export default PlayerRepo;
