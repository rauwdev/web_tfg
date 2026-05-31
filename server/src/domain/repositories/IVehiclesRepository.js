class IVehiclesRepository {
    async findById(id)                              { throw new Error("Sin implementar") }
    async findAll()                                 { throw new Error("Sin implementar") }
    async findByPlate(plate)                        { throw new Error("Sin implementar") }
    async save(vehicle)                             { throw new Error("Sin implementar") }
    async update(vehicle)                           { throw new Error("Sin implementar") }
    async delete(id)                                { throw new Error("Sin implementar") }
}

module.exports = IVehiclesRepository