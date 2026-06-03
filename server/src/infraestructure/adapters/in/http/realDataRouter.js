const express = require("express")
const router = express.Router()
const authMiddleware = require("./authMiddleware")
const validate = require("./validators/genericErrorMiddleware")
const { create, search } = require("./realDataController")

router.post("/create", authMiddleware, create)
router.get("/search", authMiddleware, search)

module.exports = router