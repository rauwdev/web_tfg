import "./LogsTable.css"

export default function LogsTable() {
    return (
        <div className="logs-section">
            <div className="logs-section-header">
                <span className="logs-section-title">Logs de telemetría</span>
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

                <button className="logs-filter-clear">Limpiar</button>
            </div>

            <div className="logs-table-wrapper">
                <table className="logs-table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Vehículo</th>
                            <th>Impacto</th>
                            <th>Accel X</th>
                            <th>Accel Y</th>
                            <th>Accel Z</th>
                            <th>Gyro X</th>
                            <th>Gyro Y</th>
                            <th>Cinturón</th>
                            <th>Asiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="logs-table-cell-time">02/06/2026 10:14:32</td>
                            <td>1</td>
                            <td><span className="logs-table-impact">0</span></td>
                            <td>0.515</td>
                            <td>-0.009</td>
                            <td>9.978</td>
                            <td>1.657</td>
                            <td>-2.366</td>
                            <td><span className="logs-table-badge logs-table-badge--ok">SÍ</span></td>
                            <td><span className="logs-table-badge logs-table-badge--ok">SÍ</span></td>
                        </tr>
                        <tr>
                            <td className="logs-table-cell-time">02/06/2026 10:14:31</td>
                            <td>1</td>
                            <td><span className="logs-table-impact logs-table-impact--alert">3</span></td>
                            <td>2.143</td>
                            <td>-1.872</td>
                            <td>11.204</td>
                            <td>4.521</td>
                            <td>-3.119</td>
                            <td><span className="logs-table-badge logs-table-badge--ok">SÍ</span></td>
                            <td><span className="logs-table-badge logs-table-badge--warn">NO</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}