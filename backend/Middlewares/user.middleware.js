const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = require('../Token/Token');

const tokenAuth = {
    adminAuthenticate: authenticateToken,
    managerAuthenticate: authenticateTokenManagerAdmin
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(user);
        if (req.user.role === "Admin")
            next();
        else { console.log("Not admin"); return res.status(403).send("Not admin"); }
    })
}

function authenticateTokenManagerAdmin(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(user);
        if (req.user.role === "Admin" || "Manager")
            next();
        else { console.log("Not admin"); return res.status(403).send("Not admin"); }
    })
}

module.exports = tokenAuth;