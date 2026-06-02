class DeleteVehicle {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(vehicleId) {
        const vehicle = await this.vehicleRepository.findById(vehicleId)
        if (!vehicle) {
            const error = new Error("Vehículo no encontrado")
            error.statusCode = 404
            throw error
        }
        return this.vehicleRepository.delete(vehicleId)
    }
}

module.exports = DeleteVehicle