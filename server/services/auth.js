// Middle weare
exports.checkJWT = function (req, res, next) {
    const isValidToken = false;

    if (isValidToken) {
        next();
        
    } else {
        return res.status(401).send({ title: 'Not Authrized', detail: 'please login in order to get a data' });
    }

} 