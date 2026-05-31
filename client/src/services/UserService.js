import api from "../utils/apiClient"

export async function getAllByRole(role) {
    const response = await api.get(`/user/findAllByRole?role=${role}`)
    return response.data
}