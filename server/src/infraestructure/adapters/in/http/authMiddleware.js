const Token = require("../../../services/token")

function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "Token no válido" })
        }
        const verifyToken = Token.verify(token)
        if (!verifyToken) {
            return res.status(401).json({ message: "Token no válido" })
        }
        req.user = verifyToken
        next()
    } catch (err) {
        return res.status(401).json({ message: "Token no válido" })
    }
}

module.exports = authMiddleware