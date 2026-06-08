const axios = require("axios")
const { CookieJar } = require("tough-cookie")
const { wrapper } = require("axios-cookiejar-support")

const jar = new CookieJar()
const api = wrapper(axios.create({
    baseURL: "http://15.237.184.71:3000/api",
    jar
}))

const generateEmulatedData = () => {
    let data
    data = {
        "seatbeltDriver": true,
        "seatbeltCopilot": false,
        "seatbeltRearLeft": true,
        "seatbeltRearRight": false,
        "driverSeat": true,
        "copilotSeat": false,
        "rearLeftSeat": true,
        "rearRightSeat": false,
        "driverSeatKg": 78,
        "copilotSeatKg": 0,
        "rearLeftSeatKg": 53,
        "rearRightSeatKg": 0,
        "impactFrontLeft": 0,
        "impactFrontCenter": 0,
        "impactFrontRight": 0,
        "impactLeftSideFront": 0,
        "impactLeftSideCenter": 0,
        "impactLeftSideRear": 0,
        "impactRightSideFront": 0,
        "impactRightSideCenter": 0,
        "impactRightSideRear": 0,
        "impactRearLeft": 0,
        "impactRearCenter": 0,
        "impactRearRight": 0,
        "brake": (Math.random() * 30),
        "accelX": (Math.random() * 6) - 3,
        "accelY": (Math.random() * 3) - 1.5,
        "accelZ": (Math.random() * 0.6) + 9.5,
        "gyroX": (Math.random() * 6) - 3,
        "gyroY": (Math.random() * 6) - 3,
        "gyroZ": (Math.random() * 10) - 5,
        "vehicle": 2
    }
    return data
}

async function login() {
    await api.post("/user/login", {
        email: "admin@admin.com",
        password: "adminadmin"
    })
    console.log("Login OK")
}

const deliverEmulatedData = async () => {
    try {
        const data = generateEmulatedData()
        const response = await api.post("/emulatedData/create", data)
        console.log(response.status)
    } catch (error) {
        console.error(error.response?.status || error.message)
    }
}

login().then(() => {
    setInterval(deliverEmulatedData, 100)
}).catch(err => {
    console.error("Error en login:", err.message)
})