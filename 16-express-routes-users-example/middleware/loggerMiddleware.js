const loggerMiddleware = (request, response, next) => {
    console.log("Logging......");
    
    console.log("Method: " + request.method);
    console.log("URL: " + request.url);

    console.log("Logging ends...");
    
    next();
}

module.exports = loggerMiddleware;