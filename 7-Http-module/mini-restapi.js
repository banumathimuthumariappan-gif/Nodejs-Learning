const http = require('http');

const users = [
    {
        id: 1,
        name: "Banumathi",
        course: "Node js"
    },
    {
        id: 2,
        name: "Vanitha",
        course: "React js"
    }
];

const server = http.createServer((request, response) => {
    if(request.url === '/users') {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(users));
    } else {
        response.statusCode = 404;
        response.write("Route Not Found");
    }
    response.end();
});

server.listen(3000);