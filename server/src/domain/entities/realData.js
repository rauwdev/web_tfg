class RealData {
    constructor({
        realDataId, raw, pct, pctFiltered,
        accelX, accelY, accelZ, gyroX, gyroY,
        impact, seatbelt, seat, vehicle
    }) {
        if (!vehicle) throw new Error("RealData requiere un vehicle")
        this.realDataId = realDataId
        this.raw = raw
        this.pct = pct
        this.pctFiltered = pctFiltered
        this.accelX = accelX
        this.accelY = accelY
        this.accelZ = accelZ
        this.gyroX = gyroX
        this.gyroY = gyroY
        this.impact = impact
        this.seatbelt = seatbelt
        this.seat = seat
        this.vehicle = vehicle
    }
}

module.exports = RealData