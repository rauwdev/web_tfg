const IRealDataRepository = require("../../../../domain/repositories/IRealDataRepository")
const RealData = require("../../../../domain/entities/realData")
const RealDataModel = require("./realDataModel")
const VehiclesModel = require("./vehiclesModel")
const { Op } = require("sequelize")

class RealDataSequelizeRepository extends IRealDataRepository {
    async findById(id) {
        const row = await RealDataModel.findByPk(id)
        if (!row) return null
        return new RealData(row.toJSON())
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

        const rows = await RealDataModel.findAll({
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

        return rows.map(row => new RealData(row.toJSON()))
    }

    async countSince(since) {
        return await RealDataModel.count({
            where: {
                createdAt: { [Op.gt]: since }
            }
        })
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