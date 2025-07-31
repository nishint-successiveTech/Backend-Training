import Joi from "joi";

class UserValidator {
  public static userValidator() {
    return Joi.object({
      username: Joi.string().min(6).required(),
      password: Joi.string().min(8).required(),
    });
  }
}

export default UserValidator;
