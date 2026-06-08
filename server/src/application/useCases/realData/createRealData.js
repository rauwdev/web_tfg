class CreateRealData {
    constructor(realDataRepository, alertsRepository, realImpactAnalysisService) {
        this.realDataRepository = realDataRepository
        this.realImpactAnalysisService = realImpactAnalysisService
        this.alertsRepository = alertsRepository
    }

    async execute(data) {
        const saved = await this.realDataRepository.save(data)
        const impact = this.realImpactAnalysisService.analyzeImpact(saved)
        if (impact !== null) {
            await this.alertsRepository.save({
                crash: saved.realDataId,
                vehicle: saved.vehicle,
                zone: "front-center",
                severity: "moderate",
                type: "real"
            })
        }
        return saved
    }
}

module.exports = CreateRealData