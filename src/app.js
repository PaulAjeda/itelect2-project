import { formatDate, validateTask, mergeTaskUpdate, createTask } from "./utils.js";
import { fetchSampleUsers, fetchSampleUsersPromise } from "./api.js";

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

console.log(mergeTaskUpdate(oldTask, 
    {dueDate: "2026-07-15" },
    { status: "Completed" }

    )
);

//testing
async function main() {

    try {

        //async/await
        const users = await fetchSampleUsers();
        console.log(users);

        const newTask = createTask({
            title: "GT4 Task",
            dueDate: "2026-09-23"
        });

        console.log(newTask);

    } catch (err) {
        console.error(err.message);
    }
}

main();