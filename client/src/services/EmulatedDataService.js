import api from "../utils/apiClient"

export async function getHourlyService() {
    const response = await api.get("/emulatedData/countHourly")
    return response.data
}

