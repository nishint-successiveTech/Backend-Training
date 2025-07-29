import express from "express";
import { CricketController } from "../controllers/CricketController";

export const CricketRouter = express.Router();

CricketRouter.post("/createCricketPlayer", CricketController);
