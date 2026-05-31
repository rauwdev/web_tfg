const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { createEmulatedDataValidation } = require("./validators/emulatedDataValidator")
const { create } = require("./emulatedDataController")

router.post("/create", authMiddleware, createEmulatedDataValidation, validate, create)

module.exports = router