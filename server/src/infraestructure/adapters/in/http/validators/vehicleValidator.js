const { body } = require("express-validator")

const vehicleValidation = [
    body("owner")
        .notEmpty().withMessage("El dueño del vehículo es obligatorio")
        .isInt().withMessage("El dueño debe tener una ID válida"),
    body("plate")
        .trim()
        .notEmpty().withMessage("La patente es obligatoria")
        .isLength({ min: 4, max: 10 }).withMessage("La patente debe contener entre 4 y 10 caracteres")
]

module.exports = { vehicleValidation }