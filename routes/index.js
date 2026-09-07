import express from "express";
import db from "../models/index.cjs";

const { Task, User } = db;

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello from the router!" });
});

// GET all tasks with their users
router.get("/tasks", async (req, res) => {
    const tasks = await Task.findAll({
        include: User,
        order: [["id", "ASC"]]
    });

    res.status(200).json(tasks);
});

// GET one task by ID with its user
router.get("/tasks/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id, {
        include: User
    });

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
});

// GET all users
router.get("/users", async (req, res) => {
    const users = await User.findAll();

    res.status(200).json(users);
});

// POST a new task
router.post("/tasks", async (req, res) => {
    const newTask = await Task.create(req.body);

    res.status(201).json(newTask);
});

// PUT/update a task
router.put("/tasks/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    await task.update(req.body);

    res.status(200).json(task);
});

// DELETE a task
router.delete("/tasks/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    await task.destroy();

    res.status(200).json({
        message: "Deleted",
        task
    });
});

export default router;