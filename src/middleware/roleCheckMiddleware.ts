import { Request, Response, NextFunction } from "express";

export const authorizeRoleChecker = (role: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user1 = (req as any).user;
    if (!user1 || !role.includes(user1.role)) {
      return res.status(403).json({
        errorIs: "ACCESS NOT ALLOWED BCOZ YOUR ROLE IS " + user1.role,
      });
    }
    next();
    return;
  };
};
