const Vehicle = require("../../domain/entities/vehicle")

class CreateVehicle {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute({ owner, plate }) {
        const existingVehicle = await this.vehicleRepository.findByPlate(plate)
        if (existingVehicle) {
            const error = new Error("La patente ya se encuentra registrada")
            error.statusCode = 409
            throw error
        }
        const vehicle = new Vehicle({
            owner,
            plate
        })
        return await this.vehicleRepository.save(vehicle)
    }
}

module.exports = CreateVehicle