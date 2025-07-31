import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

class RateLimiter {
  public static getRateLimiter(time: number, limit: number) {
    return rateLimit({
      windowMs: time,
      max: limit,
      message: "too many requests",
      handler:(req:Request,res:Response,next:NextFunction)=>{
        res.status(429).json({
            success:false,
            message:"Rate limit exceed"
        })
      }
    });
  }
}
export default RateLimiter;
