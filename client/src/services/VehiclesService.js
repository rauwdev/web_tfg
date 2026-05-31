import api from "../utils/apiClient"

export async function getAll() {
    const response = await api.get("/vehicles/getAll")
    return response.data
}

export async function createVehicleService(data) {
    const response = await api.post("/vehicles/create", data)
    return response.data
}

export async function deleteVehicleService(vehicleId) {
    const response = await api.delete(`/vehicles/${vehicleId}`)
    return response.data
}