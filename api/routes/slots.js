import express from "express";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:Slotid", verifyAdmin, createRoom);


export default router;
