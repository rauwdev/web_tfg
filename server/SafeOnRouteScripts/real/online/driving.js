const axios = require("axios")
const { CookieJar } = require("tough-cookie")
const { wrapper } = require("axios-cookiejar-support")

const jar = new CookieJar()
const api = wrapper(axios.create({
    baseURL: "http://15.237.184.71:3000/api",
    jar
}))

const generateRealData = () => {
    const data = {
        "raw": 2340,
        "pct": 71.5,
        "pctFiltered": 70.8,
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
    return data
}

async function login() {
    await api.post("/user/login", {
        email: "admin@admin.com",
        password: "adminadmin"
    })
    console.log("Login OK")
}

const deliverRealData = async () => {
    try {
        const data = generateRealData()
        const response = await api.post("/realData/create", data)
        console.log(response.status)
    } catch (error) {
        console.error(error.response?.status || error.message)
    }
}

login().then(() => {
    setInterval(deliverRealData, 100)
}).catch(err => {
    console.error("Error en el login:", err.message)
})