const authorization = (arrType) => (req, res, next) => {
    const user = req.user;
    const isAdmin = arrType.includes(user.type);
    if (isAdmin) {
        next();
    } else {
        res.status(403).send('Ban da dang nhap nhung khong co quyen truy cap');
    }
};

module.exports = {
    authorization,
};
