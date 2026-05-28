const fs = require('fs');

fs.appendFile('message.txt', '\nNew line added', (error) => {
    if(error) {
        console.log("Error in appending data to file");
        console.log(error);
    }
    console.log("Content appended successfully");
});