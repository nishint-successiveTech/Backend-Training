import UserEntity from "../entities/userEntity";

class UserRepo {
  public static async register(data:any) {
    const username = await UserEntity.findOne({ username: data.username });
    if (username) {
      throw new Error("Username Already Exist");
    }

    return await UserEntity.create(data);
  }
  public static async login(data:any) {
    const username = await UserEntity.findOne({ username: data.username });
    if (!username) {
      throw new Error("Username not exist");
    }
    if (username.password != data.password) {
      throw new Error("Password wrong");
    }
    return username;
  }
}

export default UserRepo;
