import api from "../utils/apiClient"

export async function getHourlyService() {
    const response = await api.get("/emulatedData/countHourly")
    return response.data
}

export async function searchEmulatedData({ plate, fromDate, toDate, page, limit }) {
    const response = await api.get(`/emulatedData/search`, {
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