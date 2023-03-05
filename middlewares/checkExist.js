const checkExist = function (Model) {
    return async (req, res, next) => {
        const station = await Model.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (station) {
            next();
        } else {
            res.status(404).send('Khong tim thay Station not found');
        }
    };
};

module.exports = { checkExist };
