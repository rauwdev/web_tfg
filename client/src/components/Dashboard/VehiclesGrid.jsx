import { useEffect } from "react"
import "./VehiclesGrid.css"
import { getAll, deleteVehicleService, createVehicleService } from "../../services/VehiclesService"
import { useState } from "react"
import { useAuth } from "../../context/AuthProvider"
import { getAllByRole } from "../../services/UserService"


export default function VehiclesGrid() {
    
    const { user } = useAuth()
    const [vehicles, setVehicles] = useState([])
    const [vehicleCardPopUp, setVehicleCardPopUp] = useState(null)
    const [vehicleRegisterPopUp, setVehicleRegisterPopUp] = useState(null)
    const [clients, setClients] = useState([])
    const [owner, setOwner] = useState("")
    const [plate, setPlate] = useState("")
    const isAdmin = user.role === "admin"

    async function handleVehicleDelete(vehicleId) {
        try {
            await deleteVehicleService(vehicleId)
            setVehicleCardPopUp(null)
        } catch (error) {}
    }

    async function handleVehicleRegister() {
        try {
            await createVehicleService({owner: Number(owner), plate })
            setVehicleRegisterPopUp(false)
            setPlate("")
            setOwner("")
        } catch (error) {}
    }
    
    useEffect(() => {
        async function fetchVehicles() {
            const data = await getAll()
            setVehicles(data)
        }
        async function fetchClients() {
            try {
                const data = await getAllByRole("client")
                setClients(data)
                if (data.length > 0) {
                    setOwner(data[0].userId)
                }
            } catch (error) {}
        }
        fetchVehicles()
        fetchClients()
        
        const interval = setInterval(fetchVehicles, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="vehicles-section">
                <div className="vehicles-section-header">
                <span className="vehicles-section-title">Flota de vehículos</span>
                {isAdmin && (
                    <button className="vehicles-section-add" onClick={() => setVehicleRegisterPopUp(true)}>+ Añadir vehículo</button>
                )}
            </div>
                <div className="vehicles-grid">
                    {vehicles.map((vehicle) => {
                        return (
                            <div key={vehicle.vehicleId} className="vehicle-card" onClick={() => setVehicleCardPopUp(vehicle)}>
                                <div className="vehicle-card-header">
                                    <span className="vehicle-card-plate">{vehicle.plate}</span>
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
                                </div>
                                <div className="vehicle-card-divider"></div>
                                <div className="vehicle-card-footer">
                                    <span className="vehicle-card-last-seen">Hace 4s</span>
                                    <span className={`vehicle-card-alerts ${vehicle.alertCount > 0 ? "vehicle-card-alerts--danger" : ""}`}>
                                    {vehicle.alertCount} {vehicle.alertCount === 1 ? "alerta" : "alertas"}
                                    </span>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            </div>
            {vehicleCardPopUp && (
                <div className="vehicle-popup-overlay" onClick={() => setVehicleCardPopUp(null)}>
                    <div className="vehicle-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="vehicle-popup-header">
                            <span className="vehicle-popup-title">{vehicleCardPopUp.plate}</span>
                            <button className="vehicle-popup-close" onClick={() => setVehicleCardPopUp(null)}>×</button>
                        </div>

                        <div className="vehicle-popup-body">
                            <div className="vehicle-popup-section">
                                <div className="vehicle-popup-row">
                                    <span className="vehicle-popup-label">Estado</span>
                                    <span className={`vehicle-card-status ${vehicleCardPopUp.status ? "vehicle-card-status--active" : "vehicle-card-status--inactive"}`}>
                                        {vehicleCardPopUp.status ? "ACTIVO" : "INACTIVO"}
                                    </span>
                                </div>
                            </div>

                            <div className="vehicle-popup-divider"></div>

                            <div className="vehicle-popup-section">
                                <div className="vehicle-popup-row">
                                    <span className="vehicle-popup-label">Propietario</span>
                                    <span className="vehicle-popup-value">{vehicleCardPopUp.ownerData.name} {vehicleCardPopUp.ownerData.surname}</span>
                                </div>
                                <div className="vehicle-popup-row">
                                    <span className="vehicle-popup-label">Contacto</span>
                                    <span className="vehicle-popup-value">{vehicleCardPopUp.ownerData.email}</span>
                                </div>
                            </div>

                            <div className="vehicle-popup-divider"></div>

                            <div className="vehicle-popup-section">
                                <span className="vehicle-popup-label">Alertas de hoy</span>
                                {vehicleCardPopUp.alertData && vehicleCardPopUp.alertData.length > 0 ? (
                                    <div className="vehicle-popup-alert-list">
                                        {vehicleCardPopUp.alertData.map(alert => (
                                            <div key={alert.alertId} className="vehicle-popup-alert-item">
                                                <span className="vehicle-popup-value">#{alert.alertId}</span>
                                                <span className="vehicle-popup-label">
                                                    {new Date(alert.createdAt).toLocaleTimeString("es-ES")}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span className="vehicle-popup-value">Sin alertas</span>
                                )}
                            </div>

                            <div className="vehicle-popup-divider"></div>

                            <div className="vehicle-popup-actions">
                                {isAdmin && (
                                    <button className="vehicle-popup-delete" onClick={() => handleVehicleDelete(vehicleCardPopUp.vehicleId)}>Eliminar vehículo</button>
                                )}
                                <button className="vehicle-popup-dismiss" onClick={() => setVehicleCardPopUp(null)}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {vehicleRegisterPopUp && (
                <>
                    <div className="vehicle-popup-overlay" onClick={() => setVehicleRegisterPopUp(false)}>
                        <div className="vehicle-popup" onClick={(e) => e.stopPropagation()}>
                            <div className="vehicle-popup-header">
                                <span className="vehicle-popup-title">Registrar vehículo</span>
                                <button className="vehicle-popup-close" onClick={() => setVehicleRegisterPopUp(false)}>×</button>
                            </div>
                            <div className="vehicle-popup-body">
                                <form className="vehicle-register-form">
                                    <div className="vehicle-register-field">
                                        <label className="vehicle-popup-label" htmlFor="owner">e-mail del propietario</label>
                                        <select className="vehicle-register-select" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)}>
                                            {clients.map((client) => {
                                                return (
                                                    <option value={client.userId} key={client.userId}> {client.email} </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="vehicle-register-field">
                                        <label className="vehicle-popup-label" htmlFor="plate">Matrícula</label>
                                        <input
                                            className="vehicle-register-input"
                                            type="text"
                                            name="plate"
                                            value={plate}
                                            onChange={(e) => setPlate(e.target.value)}
                                            placeholder="Ej: 1234 ABC"
                                            required
                                        />
                                    </div>
                                    <div className="vehicle-popup-actions">
                                        <button type="button" className="vehicle-register-submit" onClick={handleVehicleRegister}>Registrar</button>
                                        <button type="button" className="vehicle-popup-dismiss" onClick={() => setVehicleRegisterPopUp(false)}>Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}