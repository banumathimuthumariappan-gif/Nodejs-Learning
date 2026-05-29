const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send("Get Users");
});

router.post('/', (request, response) => {
    response.send("Create User");
});

router.put('/', (request, response) => {
    response.send("Update User");
});

router.delete('/:id', (request, response) => {
    response.send("Delete User");
});

module.exports = router;