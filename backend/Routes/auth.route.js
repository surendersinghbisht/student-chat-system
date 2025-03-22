import express from "express";
import {signup, login} from "../contollers/auth.controller.js";
 
const router  = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;