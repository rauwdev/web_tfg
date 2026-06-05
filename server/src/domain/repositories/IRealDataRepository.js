class IRealDataRepository {
    async findById(id)                                                                  { throw new Error("Sin implementar") }
    async findByCriteria({ vehicle, fromDate, toDate, page, limit })                    { throw new Error("Sin implementar") }
    async findAll()                                                                     { throw new Error("Sin implementar") }
    async countSince()                                                                  { throw new Error("Sin implementar") }
    async save(realData)                                                                { throw new Error("Sin implementar") }
    async update(realData)                                                              { throw new Error("Sin implementar") }
    async delete(id)                                                                    { throw new Error("Sin implementar") }
}

module.exports = IRealDataRepository