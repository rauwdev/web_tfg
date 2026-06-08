import api from "../utils/apiClient"

export async function searchRealData({ plate, fromDate, toDate, page, limit }) {
    const response = await api.get(`/realData/search`, {
        params: {
            plate,
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