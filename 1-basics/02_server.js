const http = require('http');
const server = http.createServer((request, response) => {
    console.log("URL is " + request.url);
    if(request.url === '/') {
        response.write("Home page");
    } else if(request.url === '/about') {
        response.write("About page");
    } else {
        response.write("404 - Not Found");
    }

    response.end();
});

server.listen(3000, () => {
    console.log("Server listening");
});