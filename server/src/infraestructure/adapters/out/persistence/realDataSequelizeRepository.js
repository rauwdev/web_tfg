const IRealDataRepository = require("../../../../domain/repositories/IRealDataRepository")
const RealData = require("../../../../domain/entities/RealData")
const RealDataModel = require("./realDataModel")
const { Op } = require("sequelize")

class RealDataSequelizeRepository extends IRealDataRepository {
    async findById(id) {
        const row = await RealDataModel.findByPk(id)
        if (!row) return null
        return new RealData(row.toJSON())
    }

    async findByCriteria({ vehicle, fromDate, toDate}) {
        const where = {}
        if (vehicle) {
            where.vehicle = vehicle
        }

        if (fromDate && toDate) {
            where.createdAt = { [Op.between]: [fromDate, toDate]}
        } else if (fromDate) {
            where.createdAt = { [Op.gte]: [fromDate] }
        } else if (toDate) {
            where.createdAt = { [Op.lte]: [toDate] }
        }
        
        const rows = await RealDataModel.findAll({
            where,
            order: [["createdAt", "DESC"]]
        })

        return rows.map(row => new RealData(row.toJSON()))
    }

    async findAll() {
        const rows = await RealDataMode.findAll()
        return rows.map(row => new RealData(row.toJSON()))
    }

    async save(realData) {
        const created = await RealDataModel.create(realData)
        return new RealData(created.toJSON())
    }

    async update(realData) {
        const row = await RealDataModel.findByPk(realData.realDataId)
        if (!row) return null
        await row.update(realData)
        return new RealData(row.toJSON())
    }

    async delete(id) {
        const row = await RealDataModel.findByPk(id)
        if (!row) return null
        await row.destroy()
        return true
    }
}

module.exports = RealDataSequelizeRepository