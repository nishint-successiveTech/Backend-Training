import { Router } from "express";
import { getMockList, getSeedData } from "../controllers/mockController";

export const mockRouter = Router();

mockRouter.get("/mockList", getMockList);
mockRouter.post("/seed", getSeedData);
