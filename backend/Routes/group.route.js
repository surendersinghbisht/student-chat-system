import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {createGroup} from "../controllers/group.controller.js"
const router = express.Router();

router.post("/create-group", authMiddleware, createGroup);

export default router;