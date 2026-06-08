import "./VehiclesGrid.css"
import { getAll, deleteVehicleService, createVehicleService } from "../../services/VehiclesService"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthProvider"
import { NavLink } from "react-router-dom"
import LogsIcon from "../../assets/logs.svg"
import RealIcon from "../../assets/real.svg"
import EmulatedIcon from "../../assets/simulated.svg"
import VehicleRegisterModal from "./VehicleRegisterModal"
import VehicleDetailsModal from "./VehicleDetailsModal"


export default function VehiclesGrid({ mode, setMode }) {
    
    const { user } = useAuth()
    const [vehicles, setVehicles] = useState([])
    const [vehicleCardPopUp, setVehicleCardPopUp] = useState(null)
    const [vehicleRegisterPopUp, setVehicleRegisterPopUp] = useState(null)
    const isAdmin = user.role === "admin"

    async function handleVehicleDelete(vehicleId) {
        try {
            await deleteVehicleService(vehicleId)
            setVehicleCardPopUp(null)
        } catch (error) {}
    }

    async function handleVehicleRegister({ owner, plate, manufacturer, model }) {
        try {
            await createVehicleService({ owner, plate, manufacturer, model })
        } catch (error) {}
    }

    useEffect(() => {
        async function fetchVehicles() {
            const data = await getAll()
            setVehicles(data)
        }
        fetchVehicles()
        
        const interval = setInterval(fetchVehicles, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="vehicles-section">
                <div className="vehicles-section-header">
                    <span className="vehicles-section-title">Flota de vehículos {mode === "real" ? "(Datos reales)" : "(Datos emulados)"} </span>
                    <div className="vehicles-section-actions">
                        {mode === "real" ? (
                            <NavLink className="vehicles-section-add vehicles-section-state" onClick={() => setMode("emulated")}>
                                <img src={EmulatedIcon} />
                            </NavLink>
                        ) : (
                            mode === "emulated" ? (
                                <NavLink className="vehicles-section-add vehicles-section-state" onClick={() => setMode("real")}>
                                    <img src={RealIcon} />
                                </NavLink>
                            ) : null
                        )}
                        <NavLink to="/logs" className="vehicles-section-add vehicles-section-logs">
                            <img src={LogsIcon} />
                        </NavLink>
                        {isAdmin && (
                            <button className="vehicles-section-add" onClick={() => setVehicleRegisterPopUp(true)}>+ Añadir vehículo</button>
                        )}
                    </div>
                </div>
                <div className="vehicles-grid">
                    {vehicles.map((vehicle) => {
                        return (
                            <div key={vehicle.vehicleId} className="vehicle-card" onClick={() => setVehicleCardPopUp(vehicle)}>
                                <div className="vehicle-card-header">
                                    <span className="vehicle-card-plate">{vehicle.plate} · {vehicle.manufacturer} {vehicle.model}</span>
                                    <span className={`vehicle-card-status ${vehicle.status ? "vehicle-card-status--active" : "vehicle-card-status--inactive"}`}>
                                        {vehicle.status ? "ACTIVO" : "INACTIVO"}
                                    </span>
                                </div>
                                <div className="vehicle-card-info">
                                    <div className="vehicle-card-row">
                                        <span className="vehicle-card-label">Propietario</span>
                                        <span className="vehicle-card-value">{vehicle.ownerData.name} {vehicle.ownerData.surname}</span>
                                    </div>
                                    <div className="vehicle-card-row">
                                        <span className="vehicle-card-label">Contacto</span>
                                        <span className="vehicle-card-value">{vehicle.ownerData.email}</span>
                                    </div>
                                    <div className="vehicle-card-row">
                                        <span className="vehicle-card-label">Alertas</span>
                                        <span className={`vehicle-card-alerts ${vehicle.alertCount > 0 ? "vehicle-card-alerts--danger" : ""}`}>
                                            {vehicle.alertCount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            </div>
            {vehicleCardPopUp && (
                <VehicleDetailsModal
                    vehicle={vehicleCardPopUp}
                    onClose={() => setVehicleCardPopUp(null)}
                    onDelete={handleVehicleDelete}
                />
            )}
            {vehicleRegisterPopUp && (
                <>
                    <VehicleRegisterModal
                        onClose={() => setVehicleRegisterPopUp(null)}
                        onSubmit={handleVehicleRegister}
                    />
                </>
            )}
        </>
    )
}