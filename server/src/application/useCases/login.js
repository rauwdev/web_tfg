class Login {
    constructor(userRepository, Password, Token) {
        this.userRepository = userRepository
        this.Token = Token
        this.Password = Password
    }

    async execute({ email, password }) {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            const error = new Error("El nombre de usuario o la contraseña son incorrectos")
            error.statusCode = 401
            throw error
        }
        const passwordObj = new this.Password(user.password)
        const verifyPassword = await passwordObj.verify(password)
        if (!verifyPassword) {
            const error = new Error("El nombre de usuario o la contraseña son incorrectos")
            error.statusCode = 401
            throw error 
        }
        const token = this.Token.create({ userId: user.userId, role: user.role })
        return { token }
    }
}

module.exports = Login