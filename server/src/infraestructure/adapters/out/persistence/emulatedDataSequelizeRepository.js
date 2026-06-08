const IEmulatedDataRepository = require("../../../../domain/repositories/IEmulatedDataRepository")
const EmulatedData = require("../../../../domain/entities/emulatedData")
const EmulatedDataModel = require("./emulatedDataModel")
const VehiclesModel = require("./vehiclesModel")
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

    async findByCriteria({ plate, fromDate, toDate, limit = 15, offset = 0 }) {
        const where = {}

        if (fromDate && toDate) {
            where.createdAt = { [Op.between]: [fromDate, toDate]}
        } else if (fromDate) {
            where.createdAt = { [Op.gte]: fromDate }
        } else if (toDate) {
            where.createdAt = { [Op.lte]: toDate }
        }

        const includeWhere = {}
        if (plate) {
            includeWhere.plate = { [Op.like]: `%${plate}%` }
        }
        
        const rows = await EmulatedDataModel.findAll({
            where,
            order: [["createdAt", "DESC"]],
            include: {
                model: VehiclesModel,
                as: "vehicleData",
                attributes: ["plate"],
                where: Object.keys(includeWhere).length > 0 ? includeWhere: undefined
            },
            limit: parseInt(limit),
            offset: parseInt(offset)
        })

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