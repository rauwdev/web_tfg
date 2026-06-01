import "./HeroDashboard.css"

export default function HeroDashboard() {
    return (
        <div className="dash">
            <div className="dash-header">
                <span className="dash-live">● LIVE</span>
                <span className="dash-unit">SENSOR UNIT #A4F2</span>
                <div className="dash-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>

            <div className="dash-body">
                <div className="dash-camera">
                    <p className="dash-cam-label">CAM-FRONT · 1920×1080 @ 60HZ</p>
                    <div className="dash-cam-view">
                        <div className="dash-box dash-box-vehicle">
                            <span>VEHICULO · 0.94</span>
                        </div>
                        <div className="dash-box dash-box-cyclist">
                            <span>CICLISTA · 0.69</span>
                        </div>
                        <span className="dash-crosshair">+</span>
                    </div>
                </div>

                <div className="dash-telemetry">
                    <p className="dash-section-title">TELEMETRIA <span>60 HZ</span></p>
                    <div className="dash-metrics">
                        <div className="dash-metric">
                            <span className="dash-metric-label">aceleración</span>
                            <span className="dash-metric-value">0.95<sub>g</sub></span>
                        </div>
                        <div className="dash-metric">
                            <span className="dash-metric-label">gyro.yaw</span>
                            <span className="dash-metric-value">0.4<sub>°/s</sub></span>
                        </div>
                        <div className="dash-metric">
                            <span className="dash-metric-label">latencia</span>
                            <span className="dash-metric-value">32.6<sub>ms</sub></span>
                        </div>
                        <div className="dash-metric">
                            <span className="dash-metric-label">framerate</span>
                            <span className="dash-metric-value">58<sub>hz</sub></span>
                        </div>
                        <div className="dash-metric">
                            <span className="dash-metric-label">confianza</span>
                            <span className="dash-metric-value">0.922</span>
                        </div>
                        <div className="dash-metric">
                            <span className="dash-metric-label">versión</span>
                            <span className="dash-metric-value">v3.2.1</span>
                        </div>
                    </div>
                    <div className="dash-bars">
                        <span style={{height: "40%"}}></span>
                        <span style={{height: "65%"}}></span>
                        <span style={{height: "50%"}}></span>
                        <span style={{height: "80%"}}></span>
                        <span style={{height: "45%"}}></span>
                        <span style={{height: "70%"}}></span>
                        <span style={{height: "90%"}}></span>
                        <span style={{height: "60%"}}></span>
                        <span style={{height: "75%"}}></span>
                        <span style={{height: "55%"}}></span>
                        <span style={{height: "85%"}}></span>
                        <span style={{height: "40%"}}></span>
                    </div>
                    <div className="dash-log">
                        <p className="dash-section-title">LOG DE EVENTOS <span>TAIL</span></p>
                        <div className="dash-log-entry">
                            <span className="dash-log-time">21:31:50</span>
                            <span className="dash-log-text">desvío de carril · −0.42m</span>
                        </div>
                        <div className="dash-log-entry">
                            <span className="dash-log-time">21:31:49</span>
                            <span className="dash-log-text">objeto detectado · ciclista</span>
                        </div>
                        <div className="dash-log-entry">
                            <span className="dash-log-time">21:31:48</span>
                            <span className="dash-log-text">sync sesión · cloud</span>
                        </div>
                        <div className="dash-log-entry">
                            <span className="dash-log-time">21:31:46</span>
                            <span className="dash-log-text dash-log-ok">respuesta · 200 OK</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}