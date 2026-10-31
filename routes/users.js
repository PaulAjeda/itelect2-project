import express from "express";
import { listUsers } from "../controllers/taskController.js";

const router = express.Router();

// GET /api/users
router.get("/", listUsers);

export default router;