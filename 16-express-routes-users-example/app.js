const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const loggerMiddleWare = require('./middleware/loggerMiddleware');

app.use(express.json());

app.use(loggerMiddleWare); // Global Middleware

app.use('/users', userRoutes); // Routes

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});