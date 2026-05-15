const jwt = require("jsonwebtoken")
require("dotenv").config()

class Token {
    static create(user) {
        try {
            const token = jwt.sign(
                { userId: user.userId, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRATION }
            )
            return token
        } catch {
            throw new Error("No se ha podido crear el token")
        }
    }

    static decode(token) {
        try {
            return jwt.decode(token.replace("Bearer ", ""))
        } catch {
            throw new Error("No se ha podido decodificar el token")
        }
    }

    static verify(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET)
        } catch {
            throw new Error("Token no válido")
        }
    }
}

module.exports = Token