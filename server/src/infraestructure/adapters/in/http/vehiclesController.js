const { createVehicle, getAllVehicles, deleteVehicle } = require("../../../config/container")

async function create(req, res, next) {
    try {
        const { owner, plate, manufacturer, model } = req.body
        const vehicle = await createVehicle.execute({ owner, plate, manufacturer, model })
        res.status(201).json(vehicle)
    } catch (error) {
        next(error)
    }
}

async function getAll(req, res, next) {
    try {
        const vehicles = await getAllVehicles.execute()
        res.status(200).json(vehicles)
    } catch (error) {
        next(error)
    }
}

async function deleteVeh(req, res, next) {
    try {
        const deleteVeh = deleteVehicle.execute(req.params.id)
        res.status(200).json({ message: "Vehiculo eliminado" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    deleteVeh,
    getAll
}