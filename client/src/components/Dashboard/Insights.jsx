import "./Insights.css"
import { getAll as getAllAlerts } from "../../services/AlertsService"
import { getAll as getAllVehicles } from "../../services/VehiclesService"
import { getHourlyService } from "../../services/EmulatedDataService"
import { getRealHourlyService } from "../../services/RealDataService"
import { useState } from "react"
import { useEffect } from "react"

export default function Insights({ mode }) {
    const [vehicleCount, setVehicleCount] = useState(0)
    const [alertsToday, setAlertsToday] = useState(0)
    const [emulatedDataCount, setEmulatedDataCount] = useState(0)
    const [realDataCount, setRealDataCount] = useState(0)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchInsights() {
            try {
                if (mode === "emulated") {
                    const vehicles = await getAllVehicles()
                    setVehicleCount(vehicles.length)

                    const alerts = await getAllAlerts()
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    const emulatedAlerts = alerts.filter(
                        alert => new Date(alert.createdAt) >= today && alert.type === "emulated"
                    )
                    setAlertsToday(emulatedAlerts.length)

                    const emulatedData = await getHourlyService()
                    setEmulatedDataCount(emulatedData)
                } else if (mode === "real") {
                    const vehicles = await getAllVehicles()
                    setVehicleCount(vehicles.length)

                    const alerts = await getAllAlerts()
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    const realAlerts = alerts.filter(
                        alert => new Date(alert.createdAt) >= today && alert.type === "real"
                    )
                    setAlertsToday(realAlerts.length)

                    const realData = await getRealHourlyService()
                    setEmulatedDataCount(realData)
                }
            } catch (error) {
                setError(true)
            }
        }
        fetchInsights()
        const interval = setInterval(fetchInsights, 3000)
        return () => clearInterval(interval)
    }, [mode])

    return (
        <>
            {error && <p>Error al cargar datos</p>}
            <div className="insights-grid">
                <div className="insight-card">
                    <span className="insight-card-label">Vehículos</span>
                    <span className="insight-card-value"> {vehicleCount} </span>
                </div>

                <div className="insight-card">
                    <span className="insight-card-label">Alertas hoy</span>
                    <span className="insight-card-value"> {alertsToday} </span>
                </div>

                <div className="insight-card">
                    <span className="insight-card-label">Datos recibidos</span>
                    <span className="insight-card-value"> {emulatedDataCount} <sub>Última hora</sub></span>
                </div>
            </div>
        </>
    )
}