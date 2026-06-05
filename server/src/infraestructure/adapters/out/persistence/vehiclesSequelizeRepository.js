const IVehiclesRepository = require("../../../../domain/repositories/IVehiclesRepository")
const Vehicle = require("../../../../domain/entities/vehicle")
const VehiclesModel = require("./vehiclesModel")
const UserModel = require("./userModel")
const { Op } = require("sequelize")
const AlertModel = require("./alertsModel")

class VehiclesSequelizeRepository extends IVehiclesRepository {
    async findById(id) {
        const row = await VehiclesModel.findByPk(id)
        if (!row) return null
        return new Vehicle(row.toJSON())
    }

    async findAll() {
        const rows = await VehiclesModel.findAll({
            include: [
                { model: UserModel, as: "ownerData", attributes: ["name", "surname", "email"] },
                { model: AlertModel, as: "alertData", attributes: ["alertId", "createdAt", "type"] }
            ]
        })
        return rows.map(row => new Vehicle(row.toJSON()))
    }

    async findByPlate(plate) {
        const row = await VehiclesModel.findOne({ where: { plate } })
        if (!row) return null
        return new Vehicle(row.toJSON())
    }

    async save(vehicle) {
        const created = await VehiclesModel.create(vehicle)
        return new Vehicle(created.toJSON())
    }

    async update(vehicle) {
        const row = await VehiclesModel.findByPk(vehicle.vehicleId)
        if (!row) return null
        await row.update(vehicle)
        return new Vehicle(row.toJSON())
    }

    async delete(id) {
        const row = await VehiclesModel.findByPk(id)
        if (!row) return null
        await row.destroy()
        return true
    }
}

module.exports = VehiclesSequelizeRepository