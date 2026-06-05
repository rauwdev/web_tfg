const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const apiKeyMiddleware = require("./apiKeyMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { create, search, countHourly } = require("./realDataController")

router.post("/create", apiKeyMiddleware, create)
router.get("/search", authMiddleware, search)
router.get("/countHourly", authMiddleware, countHourly)

module.exports = router