import { Router } from "express";
import { infoRequest } from "../middleware/infoRequest";
import { MockController } from "../controllers/MockController";

const mockController = new MockController();
export const MockRouter = Router();

MockRouter.get(
  "/mockList",
  infoRequest,
  mockController.getMockList.bind(mockController)
);
MockRouter.post(
  "/seed",
  infoRequest,
  mockController.getSeedData.bind(mockController)
);
