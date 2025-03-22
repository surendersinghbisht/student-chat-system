import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js"; 
import { sendRequest } from "../contollers/request.controller.js";

const router = express.Router();

router.post("/:userId/send-request",authMiddleware, sendRequest);

export default router;