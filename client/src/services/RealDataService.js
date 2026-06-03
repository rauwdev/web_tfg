import api from "../utils/apiClient"

export async function search({ vehicle, fromDate, toDate }) {
    const response = await api.get(`/realData/search`, {
        params: {
            vehicle,
            from: fromDate,
            to: toDate
        }
    })
    return response.data
}

export async function getRealHourlyService() {
    const response = await api.get("/realData/countHourly")
    return response.data
}