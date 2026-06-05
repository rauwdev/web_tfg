class SearchRealData {
    constructor(realDataRepository) {
        this.realDataRepository = realDataRepository
    }

    async execute({ vehicle, fromDate, toDate, page = 1, limit = 15 }) {
        const offset = (page - 1) * limit

        const dataList = await this.realDataRepository.findByCriteria({ vehicle, fromDate, toDate, limit, offset })
        return dataList
    }
}

module.exports = SearchRealData