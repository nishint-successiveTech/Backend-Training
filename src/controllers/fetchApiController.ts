import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const fetchAPI = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!resp.data) {
      throw new Error("DATA NOT FOUND IN THAT URL");
    }
    res.send(resp.data);
  } catch (e) {
    return next(e);
  }
};
