function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers["x-api-key"]
    if (apiKey !== process.env.DEVICE_API_KEY) {
        return res.status(401).json({ message: "API key inválida" })
    }
    next()
}

module.exports = apiKeyMiddleware