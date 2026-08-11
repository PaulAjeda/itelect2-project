import express from "express";
import { task } from "../src/utils.js";
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

export default router;