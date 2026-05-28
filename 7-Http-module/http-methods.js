const http = require('http');

const server = http.createServer((request, response) => {
    if(request.method === 'GET') {
        response.write("GET Request");
    } else if(request.method === 'POST') {
        response.write("POST request");
    } else {

    }
    response.end();
});

server.listen(3000);