const fs = require('fs');

fs.unlink('dummy.txt', (error) => {
    if(error) {
        console.log("Error in deleting file");
        console.log(error);
    }
    console.log("File deleted successfully");
});