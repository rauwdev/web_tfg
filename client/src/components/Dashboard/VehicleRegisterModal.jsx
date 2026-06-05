import "./VehicleRegisterModal.css"
import { useState, useEffect } from "react"
import { getAllByRole } from "../../services/UserService"

export default function VehicleRegisterModal({ onClose, onSubmit }) {
    const [clients, setClients] = useState([])
    const [owner, setOwner] = useState("")
    const [plate, setPlate] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")

    async function handleVehicleRegister() {
        try {
            await onSubmit({owner: Number(owner), plate, manufacturer, model })
            onClose()
        } catch (error) {}
    }

    useEffect(() => {
        async function fetchClients() {
            try {
                const data = await getAllByRole("client")
                setClients(data)
                if (data.length > 0) {
                    setOwner(data[0].userId)
                }
            } catch (error) {}
        }
        fetchClients()
    }, [])

    return (
        <div className="vehicle-register-modal-overlay" onClick={onClose}>
            <div className="vehicle-register-modal" onClick={(e) => e.stopPropagation()}>
                <div className="vehicle-register-modal-header">
                    <span className="vehicle-register-modal-title">Registrar vehículo</span>
                    <button className="vehicle-register-modal-close" onClick={onClose}>×</button>
                </div>
                <div className="vehicle-register-modal-body">
                    <form className="vehicle-register-modal-form">
                        <div className="vehicle-register-modal-field">
                            <label className="vehicle-register-modal-label" htmlFor="owner">e-mail del propietario</label>
                            <select className="vehicle-register-modal-select" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)}>
                                {clients.map((client) => {
                                    return (
                                        <option value={client.userId} key={client.userId}> {client.email} </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="vehicle-register-modal-field">
                            <label className="vehicle-register-modal-label" htmlFor="plate">Matrícula</label>
                            <input
                                className="vehicle-register-modal-input"
                                type="text"
                                name="plate"
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                                placeholder="Ej: 1234 ABC"
                                required
                            />
                        </div>
                        <div className="vehicle-register-modal-field">
                            <label className="vehicle-register-modal-label" htmlFor="manufacturer">Fabricante</label>
                            <input
                                className="vehicle-register-modal-input"
                                type="text"
                                name="plate"
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                                placeholder="Ej: KIA"
                                required
                            />
                        </div>
                        <div className="vehicle-register-modal-field">
                            <label className="vehicle-register-modal-label" htmlFor="model">Modelo</label>
                            <input
                                className="vehicle-register-modal-input"
                                type="text"
                                name="plate"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                placeholder="Ej: SOUL"
                                required
                            />
                        </div>
                        <div className="vehicle-register-modal-actions">
                            <button type="button" className="vehicle-register-modal-submit" onClick={handleVehicleRegister}>Registrar</button>
                            <button type="button" className="vehicle-register-modal-dismiss" onClick={onClose}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
