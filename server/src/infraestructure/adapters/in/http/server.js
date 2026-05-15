const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
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

app.get("/", async function(req, res) {
    res.sendStatus(200)
})

app.use("/api/user", userRouter)


app.use(errorHandler)
module.exports = app