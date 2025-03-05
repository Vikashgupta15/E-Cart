import express from "express";
import { getLaptop } from "../controller/laptop.controller.js";

const router = express.Router()

router.get("/",getLaptop);

export default router;