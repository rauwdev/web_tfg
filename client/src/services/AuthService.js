import axios from "axios"

const api = axios.create({
    baseURL: "/api",
    withCredentials: true
})

export async function login(email, password) {
    const response = await api.post("/user/login", { email, password })
    return response.data
}

export async function me() {
    const response = await api.get("/user/me")
    return response.data
}

export async function logout() {
    const response = await api.post("/user/logout")
}