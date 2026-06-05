class Vehicle {
    constructor({ vehicleId, owner, plate, status, ownerData, alertData, alertCount, manufacturer, model }) {
        if (!owner) throw new Error("Vehicle requiere un owner")
        if (!plate) throw new Error("Vehicle requiere un plate")

        this.vehicleId = vehicleId
        this.owner = owner
        this.plate = plate
        this.status = status
        this.ownerData = ownerData
        this.alertData = alertData
        this.alertCount = alertCount
        this.manufacturer = manufacturer
        this.model = model
    }
}

module.exports = Vehicle