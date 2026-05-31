import api from "../utils/apiClient"

export async function getLatest(lastId) {
    const response = await api.get(`/alerts/getLatest?lastId=${lastId}`)
    return response.data
}

export async function getAll() {
    const response = await api.get("/alerts/getAll")
    return response.data
}