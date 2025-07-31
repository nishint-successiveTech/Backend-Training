import UserService from "./userService";
import UserRepo from "../repositories/userRepo";

jest.mock("../repositories/userRepo")

class UserServiceTest{
    public static run(){
        describe("UserService",()=>{
            this.registerTests();
        })
    }

   private static registerTests() {
    describe("register", () => {
      it("should register a user successfully", async () => {
        const userData = { username: "john", password: "pass123" };
        const mockUser = { _id: "123", ...userData };

        (UserRepo.register as jest.Mock).mockResolvedValue(mockUser);

        const result = await UserService.register(userData);

        expect(UserRepo.register).toHaveBeenCalledWith(userData);
        expect(result).toEqual(mockUser);
      });
    });
  }
}

UserServiceTest.run();