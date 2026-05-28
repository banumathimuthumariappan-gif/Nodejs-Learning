const fs = require('fs');

// Reading File
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log("Error");
        console.log(error);
        return;
    }
    console.log("Data");
    console.log(data);
});