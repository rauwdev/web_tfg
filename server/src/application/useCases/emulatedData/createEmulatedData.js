const EmulatedData = require("../../../domain/entities/emulatedData")

class CreateEmulatedData {
    constructor(emulatedDataRepository, alertsRepository, impactAnalysisService) {
        this.emulatedDataRepository = emulatedDataRepository
        this.alertsRepository = alertsRepository
        this.impactAnalysisService = impactAnalysisService
    }

    async execute({
        seatbeltDriver, seatbeltCopilot, seatbeltRearLeft, seatbeltRearRight,
        driverSeat, copilotSeat, rearLeftSeat, rearRightSeat, driverSeatKg, copilotSeatKg,
        rearLeftSeatKg, rearRightSeatKg, impactFrontLeft, impactFrontCenter, impactFrontRight,
        impactLeftSideFront, impactLeftSideCenter, impactLeftSideRear, impactRightSideFront,
        impactRightSideCenter, impactRightSideRear, impactRearLeft, impactRearCenter, impactRearRight,
        brake, accelX, accelY, accelZ, gyroX, gyroY, gyroZ, vehicle }) {
        const emulatedData = new EmulatedData({
            seatbeltDriver, seatbeltCopilot, seatbeltRearLeft, seatbeltRearRight,
            driverSeat, copilotSeat, rearLeftSeat, rearRightSeat, driverSeatKg, copilotSeatKg,
            rearLeftSeatKg, rearRightSeatKg, impactFrontLeft, impactFrontCenter, impactFrontRight,
            impactLeftSideFront, impactLeftSideCenter, impactLeftSideRear, impactRightSideFront,
            impactRightSideCenter, impactRightSideRear, impactRearLeft, impactRearCenter, impactRearRight,
            brake, accelX, accelY, accelZ, gyroX, gyroY, gyroZ, vehicle
        })
        const saved = await this.emulatedDataRepository.save(emulatedData)
        const impact = this.impactAnalysisService.analyzeImpact(saved)
        if (impact !== null) {
            await this.alertsRepository.save({
                crash: saved.emulatedDataId,
                vehicle: saved.vehicle,
                zone: impact.zoneName,
                severity: impact.severity
            })
        }
        return saved
    }
}

module.exports = CreateEmulatedData