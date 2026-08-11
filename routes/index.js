import express from "express";
import { task, validateTask, mergeTaskUpdate } from "../src/utils.js";
import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello from the router!" });
});

router.get("/tasks", (req, res) => {
    res.status(200).json({ task });
});

router.get("/tasks/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.query.sort);
    console.log(req.body);

    for (let i = 0; i < task.length; i++) {
        if (req.params.id === task[i].id.toString()) {
            res.status(200).json({ task: task[i] });
            return;
        }
    }

    res.status(404).json({ message: "Task not found" });
});

const users = await fetchSampleUsers();

router.get("/users", (req, res) => {
    res.status(200).json( users );
});

//post
let nextId = 4;

router.post("/tasks", (req, res, next) => {
    if (!validateTask(req.body)) {
        const err = new Error("title and dueDate required");
        err.status = 400;
        return next(err);
    }

    const newTask = {
        id: nextId++,
        ...req.body,
        completed: false
    };

    task.push(newTask);

    res.status(201).json(newTask);
});

// put
router.put("/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);

    const index = task.findIndex((t) => t.id === id);

    if (index === -1) {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }

    task[index] = mergeTaskUpdate(task[index], req.body);

    res.status(200).json(task[index]);
});

// delete
router.delete("/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);

    const index = task.findIndex((t) => t.id === id);

    if (index === -1) {
        const err = new Error("Task not found");
        err.status = 404;
        return next(err);
    }

    const [removed] = task.splice(index, 1);

    res.status(200).json({
        message: "Deleted",
        task: removed
    });
});

export default router;