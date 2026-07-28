// format date
export const formatDate = (date) =>  `Due: ${date.toLocaleDateString()}`;

// validate task
export const validateTask = ({title, dueDate} = {}) => {
    return Boolean(title && dueDate);
};


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

