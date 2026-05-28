const fs = require('fs');

fs.readFile('users.json', 'utf-8', (error, data) => {
    if(error) {
        console.log("Error in reading data");
    }
    console.log("Data successfull");
    const users = JSON.parse(data);
    console.log(users);
});