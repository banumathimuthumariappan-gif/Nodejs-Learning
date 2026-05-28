const express = require('express');
const app = express();

const users = [
    {
        id: 1,
        name: "John Doe",
        course: "Node js"
    },
    {
        id: 2,
        name: "Rahul Sharma",
        course: "Angular"
    }
];

app.get('/users', (request, response) => {
    response.json(users);
});

app.get('/users/:id', (request, response) => {
    const id = request.params.id;

    const user = users.find(user => user.id == id);
    if(user) {
        response.json(user);
    } else {
        response.status(404).json({
            message: 'User not found'
        })
    }
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});