const express = require('express');
const app = express();

const middlewareFunction = (request, response, next) => {
    console.log("Middleware running");
    next();
}

app.use(middlewareFunction); // Runs for all requests - GLOBAL MIDDDLEWARE

app.get('/', (request, response) => {
    response.send("Home Page");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});