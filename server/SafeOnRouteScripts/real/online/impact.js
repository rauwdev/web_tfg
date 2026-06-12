const axios = require("axios")
const { CookieJar } = require("tough-cookie")
const { wrapper } = require("axios-cookiejar-support")

const jar = new CookieJar()
const api = wrapper(axios.create({
    baseURL: "http://15.237.184.71:3000/api",
    jar
}))

let counter = 0
const generateEmulatedData = () => {
    let data
    counter++
    if (counter < 15) {
        data = {
            "raw": (Math.random() * 30),
            "pct": (Math.random() * 30),
            "pctFiltered": (Math.random() * 30),
            "accelX": (Math.random() * 6) - 3,
            "accelY": (Math.random() * 3) - 1.5,
            "accelZ": (Math.random() * 0.6) + 9.5,
            "gyroX": (Math.random() * 6) - 3,
            "gyroY": (Math.random() * 6) - 3,
            "impact": 0,
            "seatbelt": true,
            "seat": true,
            "vehicle": 1
        }
    } else if (counter === 15) {
        data = {
            "raw": (Math.random() * 30),
            "pct": (Math.random() * 30),
            "pctFiltered": (Math.random() * 30),
            "accelX": (Math.random() * 9) - 3,
            "accelY": (Math.random() * 7) - 1.5,
            "accelZ": (Math.random() * 1.6) + 9.5,
            "gyroX": (Math.random() * 12) - 3,
            "gyroY": (Math.random() * 12) - 3,
            "impact": 4,
            "seatbelt": true,
            "seat": true,
            "vehicle": 1
        }
    } else {
        data = {
            "raw": 0,
            "pct": 0,
            "pctFiltered": 0,
            "accelX": 0,
            "accelY": 0,
            "accelZ": 9.81,
            "gyroX": 0,
            "gyroY": 0,
            "impact": 0,
            "seatbelt": true,
            "seat": true,
            "vehicle": 1
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
        const response = await api.post("/realData/create", data)
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
