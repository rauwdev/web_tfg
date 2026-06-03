class SearchRealData {
    constructor(realDataRepository) {
        this.realDataRepository = realDataRepository
    }

    async execute({ vehicle, fromData, toData }) {
        const dataList = await this.realDataRepository.findByCriteria({ vehicle, fromData, toData })
        return dataList
    }
}

module.exports = SearchRealData