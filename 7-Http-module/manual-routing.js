const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write("Home Page");
        console.log("Home Page");
    } else if(request.url === '/about') {
        response.write("About Page");
        console.log("About Page");
    } else if (request.url === '/posts') {
        response.write("Posts page");
        console.log("Posts Page");
    } else {
        response.write("404 - Not Found");
        console.log("404 - Not Found");
    }
    response.end();
});

server.listen(3000);