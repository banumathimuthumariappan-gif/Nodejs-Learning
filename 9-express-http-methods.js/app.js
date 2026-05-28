const express = require('express');
const app = express();
const user = [
    {
        id: 1, 
        name: "Banumathi",
        course: "Node js" 
    }
];

app.get('/users', (request, response) => {
    // response.send("GET request");
    response.send(user);
});

app.post('/users', (request, response) => {
    response.send("POST request");
});

app.put('/users', (request, response) => {
    response.send("PUT request");
});

app.delete('/users', (request, response) => {
    response.send("DELETE request");
});

app.listen(3000);