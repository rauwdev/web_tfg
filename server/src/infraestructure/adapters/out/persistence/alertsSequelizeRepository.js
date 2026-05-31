const IAlertsRepository = require("../../../../domain/repositories/IAlertsRepository")
const Alerts = require("../../../../domain/entities/alert")
const AlertsModel = require("./alertsModel")
const VehiclesModel = require("./vehiclesModel")
const { Op } = require("sequelize")
const UserModel = require("./userModel")

class AlertsSequelizeRepository extends IAlertsRepository {
    async findById(id) {
        const row = await AlertsModel.findByPk(id)
        if (!row) return null
        return new Alerts(row.toJSON())
    }

    async findAll() {
        const rows = await AlertsModel.findAll()
        return rows.map(row => row.toJSON())
    }

    async findSince(lastId) {
        const rows = await AlertsModel.findAll({
            where: {
                alertId: { [Op.gt]: lastId }
            },
            include: {
                model: VehiclesModel,
                as: "vehicleData",
                attributes: ["plate", "owner"],
                include: {
                    model: UserModel,
                    as: "ownerData",
                    attributes: ["name", "surname"]
                }
            }
        })
        return rows.map(row => row.toJSON())
    }

    async save(alerts) {
        const created = await AlertsModel.create(alerts)
        return new Alerts(created.toJSON())
    }

    async update(alerts) {
        const row = await AlertsModel.findByPk(alerts.alertId)
        if (!row) return null
        await row.update(alerts)
        return new Alerts(row.toJSON())
    }

    async delete(id) {
        const row = await AlertsModel.findByPk(id)
        if (!row) return null
        await row.destroy()
        return true
    }
}

module.exports = AlertsSequelizeRepository