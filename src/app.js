import { formatDate, validateTask, mergeTaskUpdate } from "./utils.js";


//formatDate
console.log(formatDate(new Date("2026-07-22")));


//validateTask
console.log(validateTask({
    title: "GT3 Task",
    dueDate: "2026-07-22"
}));


//test validateTask with empty input
console.log(validateTask());


//mergeTaskUpdate
const oldTask = {
    title: "GT3",
    dueDate: "2026-07-22",
    status: "Pending"
};

const newTask = {
    dueDate: "2026-07-15"
};

console.log("Old Task:", oldTask);
console.log("New Update:", newTask);

console.log("Updated Task:", mergeTaskUpdate(oldTask, newTask));