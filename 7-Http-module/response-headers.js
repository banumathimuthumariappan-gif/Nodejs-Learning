const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write("Hello");
    response.end();
});

server.listen(3000);