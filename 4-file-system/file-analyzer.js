const path = require('path');

const filePath = path.join(__dirname, 'reports', 'sales.pdf');

console.log("Full Path: " + filePath);
console.log("File Name: " + path.basename(filePath));
console.log("Extension: " + path.extname(filePath));
console.log("Folder: " + path.dirname(filePath));




