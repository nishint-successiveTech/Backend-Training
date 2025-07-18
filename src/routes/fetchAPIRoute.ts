import { Router } from "express";
import { fetchAPI } from "../controllers/fetchApiController";

export const fetchAPIRoute = Router();

fetchAPIRoute.get("/fetchAPI", fetchAPI);
