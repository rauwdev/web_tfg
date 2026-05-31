const User = require("../../domain/entities/user")

class Register {
    constructor(userRepository, Password) {
        this.userRepository = userRepository
        this.Password = Password
    }

    async execute({ name, surname, email, password }) {
        const existingEmail = await this.userRepository.findByEmail(email)
        if (existingEmail) {
            const error = new Error("El email ya esta registrado")
            error.statusCode = 409
            throw error
        }
        const hashedPassword = await this.Password.create(password)
        const user = new User({
            name,
            surname,
            email,
            password: hashedPassword.hashedValue
        })
        return await this.userRepository.save(user)
    }
}

module.exports = Register