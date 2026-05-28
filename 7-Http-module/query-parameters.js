const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(parsedUrl.query);
    response.end();
});
server.listen(3000);