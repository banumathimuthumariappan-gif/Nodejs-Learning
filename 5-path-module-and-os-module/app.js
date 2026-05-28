const path = require('path');

// path.join()
const filePath = path.join('folder', 'students', 'data.txt');
console.log(filePath);

const imagePath = path.join(__dirname, 'uploads', 'profile.jpg');
console.log(imagePath);

const fullPath = path.join(__dirname, 'data', 'users.json');
console.log(fullPath);

// path.basename()
const result = path.basename('C:/Banumathi/Learnings/NodeJs/Coding/4-file-system/message.txt');
console.log(result);

// path.extname()
const extension = path.extname('C:/Banumathi/Learnings/NodeJs/Coding/4-file-system/message.txt');
console.log(extension);

// Example
const fileExtension = path.extname('C:/Banumathi/Learnings/NodeJs/Coding/4-file-system/message.txt');
if(fileExtension === '.txt') {
    console.log("Valid file");
    
}

// path.dirname()
const dirResult = path.dirname('C:/Banumathi/Learnings/NodeJs/Coding/4-file-system/message.txt');
console.log(dirResult);

// path.parse()
const fileDetails = path.parse('C:/Banumathi/Learnings/NodeJs/Coding/4-file-system/message.txt');
console.log(fileDetails);





