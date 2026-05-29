const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    response.send('User added');
});

app.listen(3000);