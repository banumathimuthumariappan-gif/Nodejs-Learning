const loggerMiddleware = (request, response, next) => {
    console.log("Logging starts....");
    console.log(request.method);
    console.log(request.url);
    console.log("Logging ends...");
    next();
}

module.exports = loggerMiddleware;
