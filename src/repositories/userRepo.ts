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
    const user = await UserEntity.findOne({ username: data.username });
    if (!user) {
      throw new Error("Username not exist");
    }
    if (user.password != data.password) {
      throw new Error("Password wrong");
    }
    return user;
  }
}

export default UserRepo;
