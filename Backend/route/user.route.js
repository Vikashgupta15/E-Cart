import express from "express";
import { signup , login } from "../controller/user.controller.js";
// import { Router } from "express";
const router = express.Router();


router.post("/signup",signup);
router.post("/login",login);

export default router;