const http = require('http');
const users = {
    id: 1,
    name: 'Banumathi',
    course: 'Node js'
};

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(users));
    response.end();
});

server.listen(3000);
