import { Request, Response, NextFunction } from "express";

export interface IFetchApiController {
  fetchAPI(req: Request, res: Response, next: NextFunction):Promise<void>;
}
