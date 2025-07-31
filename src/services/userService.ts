import UserRepo from "../repositories/userRepo";

class UserService {
  public static async register(data) {
    return await UserRepo.register(data);
  }
  public static async login(data) {
    return await UserRepo.login(data);
  }
}

export default UserService;
