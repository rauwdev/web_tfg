const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { create, search, countHourly } = require("./realDataController")

router.post("/create", authMiddleware, create)
router.get("/search", authMiddleware, search)
router.get("/countHourly", authMiddleware, countHourly)

module.exports = router