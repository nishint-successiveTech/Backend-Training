import { Router } from "express";
import { FetchApiController } from "../controllers/FetchApiController";

const fetchApiController = new FetchApiController();
export const FetchAPIRouter = Router();

FetchAPIRouter.get(
  "/fetchAPI",
  fetchApiController.fetchAPI.bind(fetchApiController)
);
