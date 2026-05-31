class Vehicle {
    constructor({ vehicleId, owner, plate, status, ownerData, alertData, alertCount }) {
        if (!owner) throw new Error("Vehicle requiere un owner")
        if (!plate) throw new Error("Vehicle requiere un plate")

        this.vehicleId = vehicleId
        this.owner = owner
        this.plate = plate
        this.status = status
        this.ownerData = ownerData
        this.alertData = alertData
        this.alertCount = alertCount
    }
}

module.exports = Vehicle