const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const { getAll, getLatest } = require("./alertsController")

router.get("/getAll", authMiddleware, getAll)
router.get("/getLatest", authMiddleware, getLatest)

module.exports = router