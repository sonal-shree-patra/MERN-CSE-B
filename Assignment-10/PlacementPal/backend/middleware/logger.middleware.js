const logger = (req, res, next) => {
    const { url, method, ip } = req
    console.log(`${new Date().toLocaleString()} - ${method} - ${url} - ${ip}`);
    next();
}

module.exports = logger