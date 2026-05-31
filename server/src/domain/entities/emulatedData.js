class EmulatedData {
    constructor({ 
        emulatedDataId, seatbeltDriver, seatbeltCopilot, seatbeltRearLeft, seatbeltRearRight,
        driverSeat, copilotSeat, rearLeftSeat, rearRightSeat, driverSeatKg, copilotSeatKg,
        rearLeftSeatKg, rearRightSeatKg, impactFrontLeft, impactFrontCenter, impactFrontRight,
        impactLeftSideFront, impactLeftSideCenter, impactLeftSideRear, impactRightSideFront,
        impactRightSideCenter, impactRightSideRear, impactRearLeft, impactRearCenter, impactRearRight,
        brake, accelX, accelY, accelZ, gyroX, gyroY, gyroZ, vehicle
     }) {
        if (!vehicle) throw new Error("EmulatedData requiere un vehicle")
        this.emulatedDataId = emulatedDataId
        this.seatbeltDriver = seatbeltDriver
        this.seatbeltCopilot = seatbeltCopilot
        this.seatbeltRearLeft = seatbeltRearLeft
        this.seatbeltRearRight = seatbeltRearRight
        this.driverSeat = driverSeat
        this.copilotSeat = copilotSeat
        this.rearLeftSeat = rearLeftSeat
        this.rearRightSeat = rearRightSeat
        this.driverSeatKg = driverSeatKg
        this.copilotSeatKg = copilotSeatKg
        this.rearLeftSeatKg = rearLeftSeatKg
        this.rearRightSeatKg = rearRightSeatKg
        this.impactFrontLeft = impactFrontLeft
        this.impactFrontCenter = impactFrontCenter
        this.impactFrontRight = impactFrontRight
        this.impactLeftSideFront = impactLeftSideFront
        this.impactLeftSideCenter = impactLeftSideCenter
        this.impactLeftSideRear = impactLeftSideRear
        this.impactRightSideFront = impactRightSideFront
        this.impactRightSideCenter = impactRightSideCenter
        this.impactRightSideRear = impactRightSideRear
        this.impactRearLeft = impactRearLeft
        this.impactRearCenter = impactRearCenter
        this.impactRearRight = impactRearRight
        this.brake = brake
        this.accelX = accelX
        this.accelY = accelY
        this.accelZ = accelZ
        this.gyroX = gyroX
        this.gyroY = gyroY
        this.gyroZ = gyroZ
        this.vehicle = vehicle
    }
}

module.exports = EmulatedData