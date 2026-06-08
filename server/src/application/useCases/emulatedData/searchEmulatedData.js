class SearchEmulatedData {
    constructor(emulatedDataRepository) {
        this.emulatedDataRepository = emulatedDataRepository
    }

    async execute({ plate, fromDate, toDate, page = 1, limit = 15 }) {
        const offset = (page - 1) * limit
        
        const dataList = await this.emulatedDataRepository.findByCriteria({ plate, fromDate, toDate, limit, offset })
        return dataList
    }

}

module.exports = SearchEmulatedData
