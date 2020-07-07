const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    // extract token
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;

        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {

                res.send({message : "session Expired"})
                 
            }
            else {
                console.log(authData);
                next();
            }
        })

        // Next middleware

    } else {
        // Forbidden
        res.sendStatus(403);
    }
}