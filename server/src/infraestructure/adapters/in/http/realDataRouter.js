const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { create } = require("./realDataController")

router.post("/create", authMiddleware, create)

module.exports = router