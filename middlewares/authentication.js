const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const token = req.headers['token'];
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (decode) {
            req.user = decode;
            next();
        } else {
            res.status(401).send('Ban can dang nhap lai');
        }
    } catch (err) {
        res.status(401).send('Ban can dang nhap lai');
    }
};

module.exports = {
    authentication,
};
