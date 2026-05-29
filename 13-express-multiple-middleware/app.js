const express = require('express');
const app = express();

const middleware1 = (request, response, next) => {
    console.log("Middleware 1 running");
    next();
}

const middleware2 = (request, response, next) => {
    console.log("Middleware 2 running");
    next();
}

app.get('/', middleware1, middleware2, (request, response) => { // Runs only for '/' - ROUTE LEVEL MIDDLEWARE
    response.send("Home Page");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});