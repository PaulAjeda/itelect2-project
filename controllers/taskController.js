
import db from "../models/index.cjs";

const { Task, User } = db;

// GET /api/tasks
export async function listTasks(req, res) {
    const tasks = await Task.findAll({
        include: User,
        order: [["id", "ASC"]]
    });

    res.status(200).json(tasks);
}

// GET /api/tasks/:id
export async function getTask(req, res) {
    const task = await Task.findByPk(req.params.id, {
        include: User
    });

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
}

// GET /api/users
export async function listUsers(req, res) {
    const users = await User.findAll();

    res.status(200).json(users);
}

// POST /api/tasks
export async function createTask(req, res) {
    const newTask = await Task.create(req.body);

    res.status(201).json(newTask);
}

// PUT /api/tasks/:id
export async function updateTask(req, res) {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    await task.update(req.body);

    res.status(200).json(task);
}

// DELETE /api/tasks/:id
export async function deleteTask(req, res) {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    await task.destroy();

    res.status(200).json({
        message: "Deleted",
        task,
        deletedBy: req.user.email
    });
}
