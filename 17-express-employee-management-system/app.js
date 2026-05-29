const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employees');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

app.use(express.json());
app.use(loggerMiddleware);
app.use('/employees', employeeRoutes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});