const { register: registerUser, login: loginUseCase, userRepository } = require("../../../config/container")

async function register(req, res, next) {
    try {
        const { name, surname, email, password } = req.body
        const user = await registerUser.execute({ name, surname, email, password })
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body
        const { token } = await loginUseCase.execute({ email, password })
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict"
        })
        res.status(200).json({ message: "Logged!" })
    } catch (error) {
        next(error)
    }
}

async function me(req, res, next) {
    try {
        const user = await userRepository.findById(req.user.userId)
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        const { password, ...safeUser } = user
        return res.status(200).json(safeUser)
    } catch (error) {
        next(error)
    }
}

async function logout(req, res) {
    res.clearCookie("token")
    return res.status(200).json({ message: "Logged out!" })
}

module.exports = {
    register,
    login,
    me,
    logout
}