const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { createEmulatedDataValidation } = require("./validators/emulatedDataValidator")
const { create, countHourly, search } = require("./emulatedDataController")

router.post("/create", authMiddleware, createEmulatedDataValidation, validate, create)
router.get("/search", authMiddleware, search)
router.get("/countHourly", authMiddleware, countHourly)


module.exports = router