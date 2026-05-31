const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const { create, getAll, deleteVeh } = require("./vehiclesController")
const { vehicleValidation } = require("./validators/vehicleValidator")
const validate = require("./validators/genericErrorMiddleware")


router.post("/create", authMiddleware, vehicleValidation, validate, create)
router.get("/getAll", authMiddleware, getAll)
router.delete("/:id", authMiddleware, deleteVeh)

module.exports = router