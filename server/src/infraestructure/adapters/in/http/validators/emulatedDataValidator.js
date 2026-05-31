const { body } = require("express-validator")

const createEmulatedDataValidation = [
    body("vehicle")
        .notEmpty().withMessage("El vehículo es obligatorio")
        .isInt().withMessage("El vehículo debe tener un ID válido"),
    body("seatbeltDriver").isBoolean().withMessage("seatbeltDriver debe ser booleano"),
    body("seatbeltCopilot").isBoolean().withMessage("seatbeltCopilot debe ser booleano"),
    body("seatbeltRearLeft").isBoolean().withMessage("seatbeltRearLeft debe ser booleano"),
    body("seatbeltRearRight").isBoolean().withMessage("seatbeltRearRight debe ser booleano"),
    body("driverSeat").isBoolean().withMessage("driverSeat debe ser booleano"),
    body("copilotSeat").isBoolean().withMessage("copilotSeat debe ser booleano"),
    body("rearLeftSeat").isBoolean().withMessage("rearLeftSeat debe ser booleano"),
    body("rearRightSeat").isBoolean().withMessage("rearRightSeat debe ser booleano"),
    body("driverSeatKg").isNumeric().withMessage("driverSeatKg debe ser numérico"),
    body("copilotSeatKg").isNumeric().withMessage("copilotSeatKg debe ser numérico"),
    body("rearLeftSeatKg").isNumeric().withMessage("rearLeftSeatKg debe ser numérico"),
    body("rearRightSeatKg").isNumeric().withMessage("rearRightSeatKg debe ser numérico"),
    body("brake").isNumeric().withMessage("brake debe ser numérico"),
    body("accelX").isNumeric().withMessage("accelX debe ser numérico"),
    body("accelY").isNumeric().withMessage("accelY debe ser numérico"),
    body("accelZ").isNumeric().withMessage("accelZ debe ser numérico"),
    body("gyroX").isNumeric().withMessage("gyroX debe ser numérico"),
    body("gyroY").isNumeric().withMessage("gyroY debe ser numérico"),
    body("gyroZ").isNumeric().withMessage("gyroZ debe ser numérico")
]

module.exports = { createEmulatedDataValidation }