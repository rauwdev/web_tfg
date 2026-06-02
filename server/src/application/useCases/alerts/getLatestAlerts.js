class GetLatestAlerts {
    constructor(alertsRepository) {
        this.alertsRepository = alertsRepository
    }

    async execute(since) {
        const data = await this.alertsRepository.findSince(since)
        return data
    }
}

module.exports = GetLatestAlerts