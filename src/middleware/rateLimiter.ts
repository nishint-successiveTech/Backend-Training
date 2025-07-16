import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

export const rateLimiter = (limit: number, time: number) => {
  return rateLimit({
    windowMs: time,
    max: limit,
    message: `Too many requests in ${time},limit is only ${limit}`,
  });
};
