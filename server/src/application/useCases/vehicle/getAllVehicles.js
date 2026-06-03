class GetAllVehicles {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute() {
        const vehicles = await this.vehicleRepository.findAll()
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        return vehicles.map(vehicle => {
            const todayAlerts = vehicle.alertData
                ? vehicle.alertData.filter(alert => {
                    const date = new Date(alert.createdAt)
                    return date >= today && date < tomorrow
                })
                : []
            vehicle.alertCount = todayAlerts.length
            vehicle.alertData = todayAlerts
            return vehicle
        })
    }
}

module.exports = GetAllVehicles