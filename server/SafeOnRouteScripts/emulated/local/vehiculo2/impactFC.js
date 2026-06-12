const axios = require("axios")
const { CookieJar } = require("tough-cookie")
const { wrapper } = require("axios-cookiejar-support")

const jar = new CookieJar()
const api = wrapper(axios.create({
    baseURL: "http://localhost:3000/api",
    jar
}))

let counter = 0
const generateEmulatedData = () => {
    let data
    counter++
    if (counter < 15) {
        data = {
            "seatbeltDriver": true,
            "seatbeltCopilot": true,
            "seatbeltRearLeft": false,
            "seatbeltRearRight": false,
            "driverSeat": true,
            "copilotSeat": true,
            "rearLeftSeat": false,
            "rearRightSeat": false,
            "driverSeatKg": 78,
            "copilotSeatKg": 56,
            "rearLeftSeatKg": 0,
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
            "vehicle": 26
        }
    } else if (counter === 15) {
        data = {
            "seatbeltDriver": true,
            "seatbeltCopilot": true,
            "seatbeltRearLeft": false,
            "seatbeltRearRight": false,
            "driverSeat": true,
            "copilotSeat": true,
            "rearLeftSeat": false,
            "rearRightSeat": false,
            "driverSeatKg": 78,
            "copilotSeatKg": 56,
            "rearLeftSeatKg": 0,
            "rearRightSeatKg": 0,
            "impactFrontLeft": 40,
            "impactFrontCenter": 140,
            "impactFrontRight": 60,
            "impactLeftSideFront": 0,
            "impactLeftSideCenter": 0,
            "impactLeftSideRear": 0,
            "impactRightSideFront": 0,
            "impactRightSideCenter": 0,
            "impactRightSideRear": 0,
            "impactRearLeft": 0,
            "impactRearCenter": 0,
            "impactRearRight": 0,
            "brake": 90,
            "accelX": 16,
            "accelY": 5,
            "accelZ": 8,
            "gyroX": 15,
            "gyroY": 10,
            "gyroZ": 30,
            "vehicle": 26
        }
    } else {
        data = {
            "seatbeltDriver": true,
            "seatbeltCopilot": true,
            "seatbeltRearLeft": false,
            "seatbeltRearRight": false,
            "driverSeat": true,
            "copilotSeat": true,
            "rearLeftSeat": false,
            "rearRightSeat": false,
            "driverSeatKg": 78,
            "copilotSeatKg": 56,
            "rearLeftSeatKg": 0,
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
            "brake": 0,
            "accelX": 0,
            "accelY": 0,
            "accelZ": 9.81,
            "gyroX": 0,
            "gyroY": 0,
            "gyroZ": 0,
            "vehicle": 26
        }
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
