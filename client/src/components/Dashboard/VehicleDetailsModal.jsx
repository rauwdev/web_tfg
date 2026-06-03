import "./VehicleDetailsModal.css"
import { useAuth } from "../../context/AuthProvider"

export default function VehicleDetailsModal({ vehicle, onClose, onDelete }) {
    const { user } = useAuth()
    const isAdmin = user.role === "admin"

    return (
        <div className="vehicle-details-modal-overlay" onClick={onClose}>
            <div className="vehicle-details-modal" onClick={(e) => e.stopPropagation()}>
                <div className="vehicle-details-modal-header">
                    <span className="vehicle-details-modal-title">{vehicle.plate}</span>
                    <button className="vehicle-details-modal-close" onClick={onClose}>×</button>
                </div>

                <div className="vehicle-details-modal-body">
                    <div className="vehicle-details-modal-section">
                        <div className="vehicle-details-modal-row">
                            <span className="vehicle-details-modal-label">Estado</span>
                            <span className={`vehicle-details-modal-status ${vehicle.status ? "vehicle-details-modal-status--active" : "vehicle-details-modal-status--inactive"}`}>
                                {vehicle.status ? "ACTIVO" : "INACTIVO"}
                            </span>
                        </div>
                    </div>

                    <div className="vehicle-details-modal-divider"></div>

                    <div className="vehicle-details-modal-section">
                        <div className="vehicle-details-modal-row">
                            <span className="vehicle-details-modal-label">Propietario</span>
                            <span className="vehicle-details-modal-value">{vehicle.ownerData.name} {vehicle.ownerData.surname}</span>
                        </div>
                        <div className="vehicle-details-modal-row">
                            <span className="vehicle-details-modal-label">Contacto</span>
                            <span className="vehicle-details-modal-value">{vehicle.ownerData.email}</span>
                        </div>
                    </div>

                    <div className="vehicle-details-modal-divider"></div>

                    <div className="vehicle-details-modal-section">
                        <span className="vehicle-details-modal-label">Alertas de hoy</span>
                        {vehicle.alertData && vehicle.alertData.length > 0 ? (
                            <div className="vehicle-details-modal-alert-list">
                                {vehicle.alertData.map(alert => (
                                    <div key={alert.alertId} className="vehicle-details-modal-alert-item">
                                        <span className="vehicle-details-modal-value">#{alert.alertId}</span>
                                        <span className="vehicle-details-modal-label">
                                            {new Date(alert.createdAt).toLocaleTimeString("es-ES")}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <span className="vehicle-details-modal-value">Sin alertas</span>
                        )}
                    </div>

                    <div className="vehicle-details-modal-divider"></div>

                    <div className="vehicle-details-modal-actions">
                        {isAdmin && (
                            <button className="vehicle-details-modal-delete" onClick={() => onDelete(vehicle.vehicleId)}>Eliminar vehículo</button>
                        )}
                        <button className="vehicle-details-modal-dismiss" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
