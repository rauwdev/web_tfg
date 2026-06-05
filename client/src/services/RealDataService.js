import api from "../utils/apiClient"

export async function searchRealData({ vehicle, fromDate, toDate, page, limit }) {
    const response = await api.get(`/realData/search`, {
        params: {
            vehicle,
            from: fromDate,
            to: toDate,
            page,
            limit
        }
    })
    return response.data
}

export async function getRealHourlyService() {
    const response = await api.get("/realData/countHourly")
    return response.data
}