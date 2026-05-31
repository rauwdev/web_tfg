class IEmulatedDataRepository {
    async findById(id)                              { throw new Error("Sin implementar") }
    async findAll()                                 { throw new Error("Sin implementar") }
    async save(emulatedData)                        { throw new Error("Sin implementar") }
    async update(emulatedData)                      { throw new Error("Sin implementar") }
    async delete(id)                                { throw new Error("Sin implementar") }
}

module.exports = IEmulatedDataRepository