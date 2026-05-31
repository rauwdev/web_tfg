const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const path = require("path")
const userRouter = require("./userRouter")
const emulatedDataRouter = require("./emulatedDataRouter")
const vehiclesRouter = require("./vehiclesRouter")
const alertsRouter = require("./alertsRouter")
const errorHandler = require("./errorHandler")

const app = express()

app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/emulatedData", emulatedDataRouter)
app.use("/api/vehicles", vehiclesRouter)
app.use("/api/alerts", alertsRouter)

const clientDist = path.join(__dirname, process.env.CLIENT_DIST)
app.use(express.static(clientDist))
app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"))
})

app.use(errorHandler)
module.exports = app