const { register: registerUser, login: loginUseCase, getCurrentUser, findAllByRole } = require("../../../config/container")

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
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(200).json({ message: "Logged!" })
    } catch (error) {
        next(error)
    }
}

async function findAllUsersByRole(req, res, next) {
    try {
        const users = await findAllByRole.execute(req.query.role)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

async function me(req, res, next) {
    try {
        const user = await getCurrentUser.execute(req.user.userId)
        return res.status(200).json(user)
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
    findAllUsersByRole,
    logout
}