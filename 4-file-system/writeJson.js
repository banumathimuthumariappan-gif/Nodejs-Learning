const { error } = require('console');
const fs = require('fs');
const users = [
    {
        id: 1,
        name: "banumathi"
    },
    {
        id: 2,
        name: "Thiyalini"
    }
];

fs.writeFile('users-1.txt', JSON.stringify(users), (error) => {
    if(error) {
        console.log("Error in writing users data to file");
    }
    console.log("File created successfully");
});