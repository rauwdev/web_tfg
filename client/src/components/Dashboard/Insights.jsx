import "./Insights.css"
import { getAll as getAllAlerts } from "../../services/AlertsService"
import { getAll as getAllVehicles } from "../../services/VehiclesService"
import { useState } from "react"
import { useEffect } from "react"

export default function Insights() {
    const [vehicleCount, setVehicleCount] = useState(0)
    const [alertsToday, setAlertsToday] = useState(0)
    const [fatalCount, setFatalCount] = useState(0)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchInsights() {
            try {
                const vehicles = await getAllVehicles()
                setVehicleCount(vehicles.length)

                const alerts = await getAllAlerts()
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                const todayAlerts = alerts.filter(alert => new Date(alert.createdAt) >= today)
                setAlertsToday(todayAlerts.length)
                setFatalCount(todayAlerts.filter(alert => alert.severity === "fatal").length)
            } catch (error) {
                setError(true)
            }
        }
        fetchInsights()
        const interval = setInterval(fetchInsights, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {error && <p style={{color: "var(--red-500)", textAlign: "center"}}>Error al cargar datos</p>}
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
                    <span className="insight-card-value">1,847<sub>/h</sub></span>
                </div>
            </div>
        </>
    )
}