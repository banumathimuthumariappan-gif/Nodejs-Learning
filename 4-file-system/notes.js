const fs = require('fs');
const note = "Learn node js file system module";

fs.writeFile("notes.txt", `\n${note}`, (error) => {
    if(error) {
        console.log("Error in writing data to a file"); 
    }
    console.log("Notes added");
});