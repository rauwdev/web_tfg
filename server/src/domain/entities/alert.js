class Alert {
    constructor({ alertId, crash, vehicle, zone, severity, createdAt }) {
        if (!vehicle) throw new Error("Alert requiere un vehiculo")
        if (!zone) throw new Error("Alert requiere una zona")

        const validSeverities = ["minor", "moderate", "severe", "fatal"]
        if (severity && !validSeverities.includes(severity)) {
            throw new Error(`Severity inválida ${severity}`)
        }

        this.alertId = alertId
        this.crash = crash
        this.vehicle = vehicle
        this.zone = zone
        this.severity = severity
        this.createdAt = createdAt
    }
}

module.exports = Alert