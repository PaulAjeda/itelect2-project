// format date
export const formatDate = (date) =>  `Due: ${date.toLocaleDateString()}`;

// check task
export const validateTask = ({title, dueDate} = {}) => {
    return Boolean(title && dueDate);
};


// update task
export const mergeTaskUpdate = (original, ...updates) => {
    return updates.reduce(
        (merged, update) => ({
            ...merged,
            ...update
        }),
        orginal
    );
};