const { body } = require("express-validator")

const vehicleValidation = [
    body("owner")
        .notEmpty().withMessage("El dueño del vehículo es obligatorio")
        .isInt().withMessage("El dueño debe tener una ID válida"),
    body("plate")
        .trim()
        .notEmpty().withMessage("La patente es obligatoria")
        .isLength({ min: 4, max: 10 }).withMessage("La patente debe contener entre 4 y 10 caracteres"),
    body("manufacturer")
        .trim()
        .notEmpty().withMessage("El fabricante es obligatorio")
        .isLength({ min: 3 }).withMessage("El fabricante debe contener al menos 3 caracteres"),
    body("model")
        .trim()
        .notEmpty().withMessage("El modelo es obligatorio")
        .isLength({ min: 3 }).withMessage("El modelo debe contener al menos 3 caracteres")
]

module.exports = { vehicleValidation }