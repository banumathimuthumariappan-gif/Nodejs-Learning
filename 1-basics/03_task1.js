const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write("Home Page");
    } else if (request.url == '/about') {
        response.write('About');
    } else {
        response.write('404');
    }
    response.end();
});

server.listen(5000, () => {
    console.log("Listening on port 5000");
});