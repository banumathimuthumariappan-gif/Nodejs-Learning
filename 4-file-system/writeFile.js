// Writing File
const fs = require('fs');

fs.writeFile('message.txt', 'I am writing this to a message file', (error) => {
    if(error) {
        console.log("Error in writing");
        console.log(error);
    }
    console.log("File created successfully!!!");
});