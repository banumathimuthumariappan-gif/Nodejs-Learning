const authMiddleware = (request, response, next) => {
    const token = request.headers.authorization;
    console.log("Checking Authentication...");
    if(token === '12345') {
        console.log("Authentication successful");
        next();
    } else {
        console.log("Authencation failed!!!");
        response.status(401).json({
            success: false,
            message: 'Unauthorized user'
        });
    }
};

module.exports = authMiddleware;