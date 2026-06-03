const { createEmulatedData, getHourlyCount } = require("../../../config/container")

async function create(req, res, next) {
    try {
        const { seatbeltDriver, seatbeltCopilot, seatbeltRearLeft, seatbeltRearRight,
        driverSeat, copilotSeat, rearLeftSeat, rearRightSeat, driverSeatKg, copilotSeatKg,
        rearLeftSeatKg, rearRightSeatKg, impactFrontLeft, impactFrontCenter, impactFrontRight,
        impactLeftSideFront, impactLeftSideCenter, impactLeftSideRear, impactRightSideFront,
        impactRightSideCenter, impactRightSideRear, impactRearLeft, impactRearCenter, impactRearRight,
        brake, accelX, accelY, accelZ, gyroX, gyroY, gyroZ, vehicle } = req.body
        
        const emulatedData = await createEmulatedData.execute({ seatbeltDriver, seatbeltCopilot, seatbeltRearLeft, seatbeltRearRight,
        driverSeat, copilotSeat, rearLeftSeat, rearRightSeat, driverSeatKg, copilotSeatKg,
        rearLeftSeatKg, rearRightSeatKg, impactFrontLeft, impactFrontCenter, impactFrontRight,
        impactLeftSideFront, impactLeftSideCenter, impactLeftSideRear, impactRightSideFront,
        impactRightSideCenter, impactRightSideRear, impactRearLeft, impactRearCenter, impactRearRight,
        brake, accelX, accelY, accelZ, gyroX, gyroY, gyroZ, vehicle })
        
        res.status(201).json(emulatedData)
    } catch (error) {
        next(error)
    }
}

async function countHourly(req, res, next) {
    try {
        const count = await getHourlyCount.execute()
        res.status(200).json(count)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    countHourly
}