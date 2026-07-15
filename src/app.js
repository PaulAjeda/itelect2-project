import { formatDate, validateTask, mergeTaskUpdate } from "./utils.js";


console.log(formatDate(new Date("2026-07-15")));


console.log(validateTask({
    title: "GT3",
    dueDate: "2026-07-15"
}));


console.log(validateTask());


console.log(
    mergeTaskUpdate(
        {title:"Old"},
        {title:"New"}
    )
);