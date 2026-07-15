// format date
export const formatDate = (date) => {
    return `Due: ${date.toLocaleDateString()}`;
};


// check task
export const validateTask = ({title, dueDate} = {}) => {
    return title && dueDate ? true : false;
};


// update task
export const mergeTaskUpdate = (original, ...updates) => {
    return {...original, ...updates[0]};
};