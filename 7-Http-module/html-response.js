const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <h1>Welcome</h1>
        <p>Node Js Learning</p>
        `);
    response.end();
});

server.listen(3000);