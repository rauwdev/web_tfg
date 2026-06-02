const IEmulatedDataRepository = require("../../../../domain/repositories/IEmulatedDataRepository")
const EmulatedData = require("../../../../domain/entities/emulatedData")
const EmulatedDataModel = require("./emulatedDataModel")
const { Op } = require("sequelize")

class EmulatedDataSequelizeRepository extends IEmulatedDataRepository {
    async findById(id) {
        const row = await EmulatedDataModel.findByPk(id)
        if (!row) return null
        return new EmulatedData(row.toJSON())
    }

    async findAll() {
        const rows = await EmulatedDataModel.findAll()
        return rows.map(row => new EmulatedData(row.toJSON()))
    }

    async countSince(since) {
        return await EmulatedDataModel.count({
            where: {
                createdAt: { [Op.gt]: since }
            }
        })
    }

    async save(emulatedData) {
        const created = await EmulatedDataModel.create(emulatedData)
        return new EmulatedData(created.toJSON())
    }

    async update(emulatedData) {
        const row = await EmulatedDataModel.findByPk(emulatedData.emulatedDataId)
        if (!row) return null
        await row.update(emulatedData)
        return new EmulatedData(row.toJSON())
    }

    async delete(id) {
        const row = await EmulatedDataModel.findByPk(id)
        if (!row) return null
        await row.destroy()
        return true
    }
}

module.exports = EmulatedDataSequelizeRepository