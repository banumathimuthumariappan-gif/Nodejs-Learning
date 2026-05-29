const { getAllUsers } = require('../services/userService');

const getUsers = (request, response) => {
    console.log("Inside User Controller...");
    const users = getAllUsers();

    response.status(200).json({
        success: true,
        data: users
    }); 
}

module.exports = {
    getUsers
}