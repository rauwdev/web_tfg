const express = require("express")
const router = express.Router()
const rateLimit = require("express-rate-limit")
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { register, login, me, logout } = require("./userController")
const { registerValidation, loginValidation } = require("./validators/userValidator")

const loginLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: {
        message: "Demasiados intentos de login. Inténtalo de nuevo en un minuto"
    }
})

router.post("/register", registerValidation, validate, register)
router.post("/login", loginLimiter, loginValidation, validate, login)
router.post("/logout", authMiddleware, logout)
router.get("/me", authMiddleware, me)

module.exports = router