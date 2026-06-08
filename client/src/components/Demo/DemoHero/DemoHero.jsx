import "./DemoHero.css"

export default function DemoHeader() {
    return (
        <section className="demo-header">
            <div className="demo-header-glow" aria-hidden="true"></div>
            <div className="demo-header-grid" aria-hidden="true"></div>

            <div className="demo-header-content">
                <div className="demo-header-eyebrow">
                    <span className="demo-header-dot"></span>
                    <span>Kit de prueba</span>
                </div>

                <h1 className="demo-header-title">
                    Prueba Safe On Route <span className="demo-header-title-accent">en tu vehículo</span>
                </h1>

                <p className="demo-header-description">
                    Solicita un kit de evaluación sin compromiso. Incluye el dispositivo,
                    acceso completo al dashboard online y soporte
                    técnico dedicado durante todo el periodo de prueba.
                </p>

                <div className="demo-header-stats">
                    <div className="demo-header-stat">
                        <span className="demo-header-stat-value">14</span>
                        <span className="demo-header-stat-label">Días de prueba</span>
                    </div>
                    <div className="demo-header-stat-divider"></div>
                    <div className="demo-header-stat">
                        <span className="demo-header-stat-value">1</span>
                        <span className="demo-header-stat-label">Vehículo</span>
                    </div>
                    <div className="demo-header-stat-divider"></div>
                    <div className="demo-header-stat">
                        <span className="demo-header-stat-value">Gratis</span>
                        <span className="demo-header-stat-label">Sin compromiso</span>
                    </div>
                </div>
            </div>
        </section>
    )
}