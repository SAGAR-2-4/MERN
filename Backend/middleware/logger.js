const logger = (req, res, next) => {
    console.log(`Path:${req.path} , Method:${req.method}`);
    next();
}

module.exports = logger;