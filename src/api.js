// Fetch users using async/await
export async function fetchSampleUsers() {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const users = await res.json();

        return users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));

    } catch (err) {
        console.error("Error:", err.message);
        return [];

    } finally {
        console.log("Done loading.");
    }
}


// Promise chaining
export function fetchSampleUsersPromise() {

    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            return res.json();

        })
        .then((users) => {

            return users.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));

        })
        .catch((err) => {

            console.error("Error:", err.message);
            return [];

        });
}