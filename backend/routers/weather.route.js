import { Router } from "express";
import weatherController from "../controllers/weather.controller.js";

const router = Router();

router.get("/:city", weatherController.weatherForecast);

export default router;