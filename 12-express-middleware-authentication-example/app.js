const express = require('express');
const app = express();

const authMiddleware = (request, response, next) => {
    const isLoggedIn = true;
    if(isLoggedIn) {
        next();
    } else {
        response.send("Access Denied");
    }
}

app.get('/dashboard', authMiddleware, (request, response) => {
    response.send("Welcome Dashboard");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});