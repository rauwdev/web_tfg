const { body } = require("express-validator")

const registerValidation = [
    body("name")
        .trim()
        .notEmpty().withMessage("El nombre es obligatorio")
        .isLength({ min: 2, max: 20 }).withMessage("El nombre debe contener entre 2 y 20 caracteres"),
    body("surname")
        .trim()
        .notEmpty().withMessage("El apellido es obligatorio")
        .isLength({ min: 2, max: 30 }).withMessage("El nombre debe contener entre 2 y 30 caracteres"),
    body("email")
        .trim()
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("El email no es válido"),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria")
        .isLength({ min: 8 }).withMessage("La contraseña debe contener como mínimo 8 caracteres")
]

const loginValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("El email no es válido"),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria")
]

module.exports = {
    registerValidation,
    loginValidation
}