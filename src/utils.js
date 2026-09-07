// format date
export const formatDate = (date) =>  `Due: ${date.toLocaleDateString()}`;

// validate task
export const validateTask = ({title, dueDate} = {}) => {
    return Boolean(title && dueDate);
};

//Hello World

// merge task update
export const mergeTaskUpdate = (original, ...updates) => {
    return updates.reduce(
        (merged, update) => ({
            ...merged,
            ...update
        }),
        original
    );
};

// task validation error

class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
    }
}

// create task
export const createTask = (taskData) => {
    if (!validateTask(taskData)) {
        throw new TaskValidationError("Invalid task data");
    }
    return {
        id: Date.now(),
        completed: false,
        ...taskData
    }
}

export const task = [
    {
        id: 1,
        title: "Task 1",
        dueDate: new Date("2026-07-22"),
        completed: false
    },
    {
        id: 2,
        title: "Task 2",
        dueDate: new Date("2026-07-23"),
        completed: false
    },
    {
        id: 3,
        title: "Task 3",
        dueDate: new Date("2026-07-24"),
        completed: false
    }
];
