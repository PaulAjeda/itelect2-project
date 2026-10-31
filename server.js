import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./routes/auth.js";
import taskRouter from "./routes/tasks.js";
import usersRouter from "./routes/users.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing from .env");
    process.exit(1);
}

// Global middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Route mounts
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/users", usersRouter);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Task Manager API running on port ${PORT}`);
});