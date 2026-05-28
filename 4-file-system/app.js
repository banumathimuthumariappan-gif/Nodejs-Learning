const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log("Error");
        console.log(error);
        return;
    }
    console.log("Data");
    console.log(data);
});

fs.writeFile('message.txt', 'I am writing this to a message file', (error) => {
    if(error) {
        console.log("Error in writing");
        console.log(error);
    }

    console.log("File created successfully!!!");
});