module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // return 400
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // return 401 unauthourized when token not recognized
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // else, return 500 server error
    return res.status(500).json({ message: err.message });
}
