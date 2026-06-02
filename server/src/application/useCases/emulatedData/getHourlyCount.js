class GetHourlyCount {
    constructor(emulatedDataRepository) {
        this.emulatedDataRepository = emulatedDataRepository
    }

    async execute() {
        const oneHourAgo = new Date()
        oneHourAgo.setHours(oneHourAgo.getHours() - 1)
        return await this.emulatedDataRepository.countSince(oneHourAgo)
    }
}

module.exports = GetHourlyCount