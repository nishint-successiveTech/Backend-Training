import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

export const rateLimiter = (time: number,limit: number) => {
  return rateLimit({
    windowMs: time,
    max: limit,
    message: `Too many requests in ${(time/1000)/60}min,limit is only ${limit}`,
  });
};
