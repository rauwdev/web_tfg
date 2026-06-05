import "./LogsTable.css"
import EmulatedIcon from "../../../assets/simulated.svg"
import RealIcon from "../../../assets/real.svg"
import Trash from "../../../assets/trash.svg"
import { useEffect, useState } from "react"
import { searchRealData } from "../../../services/RealDataService"
import { searchEmulatedData } from "../../../services/EmulatedDataService"

export default function LogsTable() {
    const [mode, setMode] = useState("emulated")
    const [realLogs, setRealLogs] = useState([])
    const [emulatedLogs, setEmulatedLogs] = useState([])
    const [page, setPage] = useState(1)
    const limit = 15

    const realColumns = [
        {
            key: "vehicle",
            label: "Vehículo",
            render: (row) => row.vehicleData?.plate ?? row.vehicle
        },
        { key: "pctFiltered", label: "Pedal de freno" },
        { key: "accelX", label: "Acelerómetro (X)" },
        { key: "accelY", label: "Acelerómetro (Y)" },
        { key: "accelZ", label: "Acelerómetro (Z)" },
        { key: "gyroX", label: "Giróscopio (X)" },
        { key: "gyroY", label: "Giróscopio (Y)" },
        {
            key: "seatbelt",
            label: "Cinturón (D)",
            render: (row) => (
                <span className={`logs-table-badge ${row.seatbelt ? "logs-table-badge--ok" : "logs-table-badge--warn"}`}>
                    {row.seatbelt ? "SÍ" : "NO"}
                </span>
            )
        },
        {
            key: "seat",
            label: "Asiento (D)",
            render: (row) => (
                <span className={`logs-table-badge ${row.seat ? "logs-table-badge--ok" : "logs-table-badge--warn"}`}>
                    {row.seat ? "SÍ" : "NO"}
                </span>
            )
        },
        { key: "impact", label: "Parachoques delantero" }
    ]

    const emulatedColumns = [
        { key: "vehicle", label: "Vehículo" },
        { key: "brake", label: "Pedal de freno" },
        { key: "accelX", label: "Acelerómetro (X)" },
        { key: "accelY", label: "Acelerómetro (Y)" },
        { key: "accelZ", label: "Acelerómetro (Z)" },
        { key: "gyroX", label: "Giróscopio (X)" },
        { key: "gyroY", label: "Giróscopio (Y)" },
        {
            key: "seatbeltDriver",
            label: "Cinturón (D)",
            render: (row) => (
                <span className={`logs-table-badge ${row.seatbeltDriver ? "logs-table-badge--ok" : "logs-table-badge--warn"}`}>
                    {row.seatbeltDriver ? "SÍ" : "NO"}
                </span>
            )
        },
        {
            key: "driverSeat",
            label: "Asiento (D)",
            render: (row) => (
                <span className={`logs-table-badge ${row.driverSeat ? "logs-table-badge--ok" : "logs-table-badge--warn"}`}>
                    {row.driverSeat ? "SÍ" : "NO"}
                </span>
            )
        },
        { key: "impactFrontCenter", label: "Parachoques delantero" },

    ]

    const columns = mode === "real" ? realColumns : mode === "emulated" ? emulatedColumns : null
    const data = mode === "real" ? realLogs : mode === "emulated" ? emulatedLogs : null

    useEffect(() => {
        async function fetchLogs() {
            try {
                if (mode === "real") {
                    const data = await searchRealData({ page, limit })
                    setRealLogs(data)
                } else if (mode === "emulated") {
                    const data = await searchEmulatedData({ page, limit })
                    setEmulatedLogs(data)
                }
            } catch (error) {}
        }
        fetchLogs()
        const interval = setInterval(fetchLogs, 2000)
        return () => clearInterval(interval)
    }, [mode, page])

    useEffect(() => {
        setPage(1)
    }, [mode])

    return (
        <div className="logs-section">
            <div className="logs-section-header">
                <span className="logs-section-title">Logs de telemetría {mode === "real" ? "(Datos reales)" : "(Datos emulados)"}</span>
                <span className="logs-section-count">0 registros</span>
            </div>

            <div className="logs-filters">
                <div className="logs-filter-field">
                    <label className="logs-filter-label">Vehículo</label>
                    <select className="logs-filter-select">
                        <option value="">Todos</option>
                    </select>
                </div>

                <div className="logs-filter-field">
                    <label className="logs-filter-label">Desde</label>
                    <input type="datetime-local" className="logs-filter-input" />
                </div>

                <div className="logs-filter-field">
                    <label className="logs-filter-label">Hasta</label>
                    <input type="datetime-local" className="logs-filter-input" />
                </div>

                <button className="logs-filter-clear">
                    <img src={Trash} />
                </button>
                {mode === "real" ? (
                    <button className="logs-filter-clear" onClick={() => setMode("emulated")}>
                        <img src={EmulatedIcon} />
                    </button>
                ) : (
                    mode === "emulated" ? (
                        <button className="logs-filter-clear" onClick={() => setMode("real")}>
                            <img src={RealIcon} />
                        </button>  
                    ) : (
                        <></>
                    )
                )}
            </div>
            <div className="logs-table-wrapper">
                <table className="logs-table">
                    <thead>
                        <tr>
                            {columns.map(col => <th key={col.key}>{col.label}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length}>
                                    <div className="logs-empty">
                                        <span className="logs-empty-text">No hay registros que coincidan con los filtros</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            data.map(row => (
                                <tr key={row.realDataId || row.emulatedDataId}>
                                    {columns.map(col => (
                                        <td key={col.key} className={col.cellClass || ""}>
                                            {col.render ? col.render(row) : row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="logs-pagination">
                <button
                    className="logs-pagination-btn"
                    onClick={() => setPage(p => p - 1)}
                    disabled={page === 1}
                >
                    ← Anterior
                </button>
                <span className="logs-pagination-page">Página {page}</span>
                <button
                    className="logs-pagination-btn"
                    onClick={() => setPage(p => p + 1)}
                    disabled={data.length < limit}
                >
                    Siguiente →
                </button>
            </div>
        </div>
    )
}