import { useEffect } from "react"
import "./CrashNotification.css"
import { getLatest } from "../../services/AlertsService"
import { useState, useRef } from "react"

export default function CrashNotification() {

    const lastIdRef = useRef(0)
    const initialized = useRef(false)
    const [alert, setAlert] = useState(null)
    const zoneLabels = {
        "front-left": "Frontal izquierda",
        "front-center": "Frontal central",
        "front-right": "Frontal derecha",
        "leftSide-front": "Lateral izq. delantera",
        "leftSide-center": "Lateral izq. central",
        "leftSide-rear": "Lateral izq. trasera",
        "rightSide-front": "Lateral der. delantera",
        "rightSide-center": "Lateral der. central",
        "rightSide-rear": "Lateral der. trasera",
        "rear-left": "Trasera izquierda",
        "rear-center": "Trasera central",
        "rear-right": "Trasera derecha"
    }
    const [popUp, setPopUp] = useState(null)

    useEffect(() => {
        let interval

        async function init() {
            try {
                const data = await getLatest(0)
                if (data.length > 0) {
                    lastIdRef.current = Math.max(...data.map(a => a.alertId))
                }
            } catch (error) {}
            interval = setInterval(fetchAlerts, 500)
        }

        async function fetchAlerts() {
            try {
                const data = await getLatest(lastIdRef.current)
                if (data.length > 0) {
                    setAlert(data)
                    lastIdRef.current = Math.max(...data.map(a => a.alertId))
                }
            } catch (error) {}
        }

        init()
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {alert && alert.map((a) => (
                <div key={a.alertId} className="alert-toast-container">
                    <div className={`alert-toast alert-toast--${a.severity}`}>
                        <div className="alert-toast-header">
                            <span className="alert-toast-title">⚠ Impacto detectado</span>
                            <button className="alert-toast-close" onClick={() => setAlert(null)}>×</button>
                        </div>
                        <div className="alert-toast-body">
                            <span className="alert-toast-zone">Zona: {zoneLabels[a.zone] || a.zone} </span>
                            <span className="alert-toast-detail">
                                {a.vehicleData?.plate} · {a.vehicleData?.ownerData?.name} {a.vehicleData?.ownerData?.surname}
                            </span>
                            <span className={`alert-toast-severity alert-toast-severity--${a.severity}`}>{a.severity.toUpperCase()}</span>
                            <button className={`alert-toast-emergency--${a.severity}`} onClick={() => setPopUp(a)} >Contactar con emergencias</button>
                        </div>
                    </div>
                </div>
            ))}
            {popUp && (
                <div className="emergency-overlay" onClick={() => setPopUp(null)}>
                    <div className="emergency-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="emergency-popup-header">
                            <span className="emergency-popup-title">Contacto de emergencias</span>
                            <button className="alert-toast-close" onClick={() => setPopUp(null)}>×</button>
                        </div>
                        <div className="emergency-popup-body">
                            <div className="emergency-popup-summary">
                                <div className="emergency-popup-row">
                                    <span className="emergency-popup-label">Vehículo</span>
                                    <span className="emergency-popup-value">{popUp.vehicleData?.plate}</span>
                                </div>
                                <div className="emergency-popup-row">
                                    <span className="emergency-popup-label">Propietario</span>
                                    <span className="emergency-popup-value">
                                        {popUp.vehicleData?.ownerData?.name} {popUp.vehicleData?.ownerData?.surname}
                                    </span>
                                </div>
                                <div className="emergency-popup-row">
                                    <span className="emergency-popup-label">Zona de impacto</span>
                                    <span className="emergency-popup-value">{zoneLabels[popUp.zone] || popUp.zone}</span>
                                </div>
                                <div className="emergency-popup-row">
                                    <span className="emergency-popup-label">Severidad</span>
                                    <span className={`alert-toast-severity alert-toast-severity--${popUp.severity}`}>
                                        {popUp.severity.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="emergency-popup-actions">
                                <a className="emergency-popup-call">
                                    Llamar al 112
                                </a>
                                <button className="emergency-popup-dismiss" onClick={() => {setPopUp(null); setAlert(null)}}>
                                    Descartar alerta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}