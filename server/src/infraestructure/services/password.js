const argon2 = require("argon2")

class Password {
    constructor(hashedValue) {
        this.hashedValue = hashedValue
    }

    static async create(plainText) {
        try {
            const hashedValue = await argon2.hash(plainText)
            return new Password(hashedValue)
        } catch {
            throw new Error("Error en el hashing de la contraseña")
        }
    }

    async verify(plainText) {
        try {
            return await argon2.verify(this.hashedValue, plainText)
        } catch {
            throw new Error("La contraseña no coincide")
        }
    }
}

module.exports = Password