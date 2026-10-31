import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";

import {
    listTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// GET /api/tasks
router.get("/", listTasks);

// GET /api/tasks/:id
router.get("/:id", getTask);

// POST /api/tasks
router.post("/", verifyToken, createTask);

// PUT /api/tasks/:id
router.put("/:id", verifyToken, updateTask);

// DELETE /api/tasks/:id
router.delete("/:id", verifyToken, requireRole("admin"), deleteTask);

export default router;