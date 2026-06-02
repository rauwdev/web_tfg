class CreateRealData {
    constructor(realDataRepository) {
        this.realDataRepository = realDataRepository
    }

    async execute(data) {
        const saved = await this.realDataRepository.save(data)
        return saved
    }
}

module.exports = CreateRealData