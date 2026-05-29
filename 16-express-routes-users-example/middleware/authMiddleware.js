const authMiddleware = (request, response, next) => {
    const token = request.headers.authorization;
    console.log("Checking Authentication...");
    if(token === '12345') {
        console.log("Authentication successful!!!");
        next();
    } else {
        console.log("Authentcation failed!!!");
        response.status(401).json({
            message: 'Unauthorized User'
        });
    }
}

module.exports = authMiddleware;