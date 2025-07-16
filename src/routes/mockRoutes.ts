import { Router } from "express";
import { getMockList, getSeedData } from "../controllers/mockController";
import { infoRequest } from "../middleware/infoRequest";

export const mockRouter = Router();

mockRouter.get("/mockList", infoRequest, getMockList);
mockRouter.post("/seed", infoRequest, getSeedData);
