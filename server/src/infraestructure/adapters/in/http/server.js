const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const path = require("path")
const userRouter = require("./userRouter")
const errorHandler = require("./errorHandler")

const app = express()

// app.use(helmet()) | ACTIVAR SOLO EN PRODUCCIÓN

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.use("/api/user", userRouter)

app.use(express.static(path.join(__dirname, "../../../../../../client/dist")))

app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../../../../client/dist/index.html"))
})

app.use(errorHandler)
module.exports = app