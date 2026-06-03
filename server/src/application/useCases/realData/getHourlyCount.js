class GetRealHourlyCount {
    constructor(realDataRepository) {
        this.realDataRepository = realDataRepository
    }

    async execute() {
        const oneHourAgo = new Date()
        oneHourAgo.setHours(oneHourAgo.getHours() - 1)
        return await this.realDataRepository.countSince(oneHourAgo)
    }
}

module.exports = GetRealHourlyCount