const BASE_URL = "http://localhost:3000";
const url = new URL(BASE_URL);

async function fetchUsers() {
    return fetch(`${BASE_URL}/users`).then((res) => res.json());
}

async function createUser(username, email, password) {
    return fetch (`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify({ username, email, password })
    }).then((res) => res.json());
}

// createUser("alice", "alice@gmail.com", "gurka123").then((data) => console.log(data));
// createUser("challe", "challe@gmail.com", "banan75").then((data) => console.log(data));
// createUser("matte", "matte@hotmail.com", "hej-san").then((data) => console.log(data));


async function updateUser({ id, username, email, password }) {
    return fetch(`${BASE_URL}/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({username, email, password})
    }).then((res) => res.json());
}

// updateUser({
    //     id: "e340",
    //     username: "charlie",
    //     email: "charlie@yahoo.com",
    // }).then((data) => console.log(data));
    
    async function deleteUser(id) {
        return fetch(`${BASE_URL}/users/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
    }
    
    // deleteUser("53a1").then((data) => console.log(data));
    // deleteUser("39b1").then((data) => console.log(data));
    // deleteUser("5443").then((data) => console.log(data));
    // deleteUser("1686").then((data) => console.log(data));
    
    // fetchUsers().then((data) => console.log(data));
    
    async function resetUser({ id, username, email, password }) {
        return fetch(`${BASE_URL}/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({ id, username, email, password })
        }).then((res) => res.json());
    }

    // resetUser({
    //     id: "e340",
    //     username: "challe",
    //     email: "challe@yahoo.com",
    //     password: "banan75"
    // }).then((data) => console.log(data));

async function fetchDawgs() {
    return fetch(`${BASE_URL}/dawgs`).then((res) => res.json());
}

async function createDawg(name, age, breed) {
    return fetch (`${BASE_URL}/dawgs`, {
        method: "POST",
        body: JSON.stringify({ name, age, breed })
    }).then((res) => res.json());
}

// createDawg("Charlie", "3", "French bulldog").then((data) => console.log(data));
// createDawg("Pelle", "8", "Golden Retriever").then((data) => console.log(data));
// createDawg("Kerstin", "24", "Rottweiler").then((data) => console.log(data));

 fetchDawgs().then((data) => console.log(data));