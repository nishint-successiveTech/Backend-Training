import { Request, Response } from "express";
import { IRegistrationFormController } from "../interfaces/IRegistrationFormController";

interface IRegister {
  username: string;
  email: string;
  city: string;
}
export class RegistrationFormController implements IRegistrationFormController {
  public registrationForm(req: Request, res: Response) {
    const { username, email, city } = req.body as IRegister;
    res.send(
      `FORM SUBMITTED SUCCESSFULLY \n YOUR FORM DATA IS \n Username:${username} \n Email:${email} \n City:${city}`
    );
  }
}
