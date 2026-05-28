const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Home Page");
});

app.get('/users', (request, response) => {
    response.send("Users Page");
});

app.get('/products', (request, response) => {
    response.send("Products Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});