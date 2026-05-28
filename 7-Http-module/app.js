const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    response.end();
});

server.listen(3000);