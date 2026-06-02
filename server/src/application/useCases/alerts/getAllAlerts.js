class GetAllAlerts {
    constructor(alertsRepository) {
        this.alertsRepository = alertsRepository
    }

    async execute() {
        const data = await this.alertsRepository.findAll()
        return data
    }
}

module.exports = GetAllAlerts