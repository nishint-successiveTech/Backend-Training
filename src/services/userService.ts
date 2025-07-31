import UserRepo from "../repositories/userRepo";

interface Idata {
  username: string;
  password: string;
}

class UserService {
  public static async register(data: Idata) {
    return await UserRepo.register(data);
  }
  public static async login(data: Idata) {
    return await UserRepo.login(data);
  }
}

export default UserService;
