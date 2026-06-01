import "./Platform.css"

export default function Platform() {
    return (
        <section className="platform">
            <div className="platform-header">
                <div className="platform-badge">
                    <span className="platform-badge-dot"></span>
                    <span className="platform-badge-text">LA PLATAFORMA</span>
                </div>
                <h2 className="platform-title">
                    Hardware, inferencia, consola.<br />
                    Un proveedor. Un producto.
                </h2>
                <p className="platform-subtitle">
                    Suministramos el hardware, los modelos de detección y la plataforma de operaciones - preintegrado, certificado y listo para homologar
                </p>
            </div>

            <div className="platform-grid">
                <div className="platform-card">
                    <span className="platform-card-tag">01 / HARDWARE</span>
                    <h3 className="platform-card-title">Unidad SOR-1</h3>
                    <p className="platform-card-description">
                        Acelerómetro de 6 ejes, células de carga y detección de presencia en los asientos. Sistema certificado con cableado preparado para el montaje en cabina.
                    </p>
                    <div className="platform-card-specs">
                        <div className="platform-card-spec">
                            <span className="platform-card-spec-label">Acelerómetro</span>
                            <span className="platform-card-spec-value">ADXL345</span>
                        </div>
                        <div className="platform-card-spec">
                            <span className="platform-card-spec-label">Voltaje</span>
                            <span className="platform-card-spec-value">12V</span>
                        </div>
                        <div className="platform-card-spec">
                            <span className="platform-card-spec-label">Cert.</span>
                            <span className="platform-card-spec-value">ASIL-B / AEC-Q104</span>
                        </div>
                        <div className="platform-card-spec">
                            <span className="platform-card-spec-label">WAN</span>
                            <span className="platform-card-spec-value">ESP8266</span>
                        </div>
                    </div>
                </div>

                <div className="platform-card">
                    <span className="platform-card-tag">02 / CLOUD</span>
                    <h3 className="platform-card-title">Inferencia & ingesta</h3>
                    <p className="platform-card-description">
                        Streaming de eventos en el pipeline. Permitiendo replicar el accidente gracias a los sensores en segundos.
                    </p>
                    <div className="platform-card-api">
                        <div className="platform-card-endpoint">
                            <span className="platform-card-method platform-card-method--post">POST</span>
                            <span className="platform-card-route">/v1/events/ingest</span>
                        </div>
                        <div className="platform-card-endpoint">
                            <span className="platform-card-method platform-card-method--get">GET</span>
                            <span className="platform-card-route">/v1/incidents/:id/replay</span>
                        </div>
                        <div className="platform-card-endpoint">
                            <span className="platform-card-method platform-card-method--post">POST</span>
                            <span className="platform-card-route">/v1/vehicles/create</span>
                        </div>
                        <div className="platform-card-endpoint">
                            <span className="platform-card-method platform-card-method--get">GET</span>
                            <span className="platform-card-route">/v1/fleet/:id/health</span>
                        </div>
                    </div>
                </div>

                <div className="platform-card">
                    <span className="platform-card-tag">03 / CONSOLA</span>
                    <h3 className="platform-card-title">Dashboard online</h3>
                    <p className="platform-card-description">
                        Dashboard preparados para cada tipo de usuario con notificaciones en tiempo real y logs. Visualización del GPS y gestión de alertas.
                    </p>
                    <div className="platform-card-dashboard">
                        <div className="platform-card-dashboard-row">
                            <div className="platform-card-bar platform-card-bar--accent" style={{width: "90%"}}></div>
                        </div>
                        <div className="platform-card-dashboard-row">
                            <div className="platform-card-bar platform-card-bar--danger" style={{width: "60%"}}></div>
                        </div>
                        <div className="platform-card-dashboard-row">
                            <div className="platform-card-bar platform-card-bar--muted" style={{width: "75%"}}></div>
                        </div>
                        <div className="platform-card-dashboard-row">
                            <div className="platform-card-bar platform-card-bar--muted" style={{width: "45%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}