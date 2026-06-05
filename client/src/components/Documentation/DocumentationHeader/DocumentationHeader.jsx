import "./DocumentationHeader.css"

export default function DocumentationHeader() {
    return (
        <section className="documentation-header">
            <div className="documentation-header-glow" aria-hidden="true"></div>
            <div className="documentation-header-grid" aria-hidden="true"></div>

            <div className="documentation-header-content">
                <div className="documentation-header-eyebrow">
                    <span className="documentation-header-dot"></span>
                    <span>Centro de documentación</span>
                </div>

                <h1 className="documentation-header-title">
                    Manuales <span className="documentation-header-title-accent">y guías</span>
                </h1>

                <p className="documentation-header-description">
                    Toda la información técnica de la plataforma en un solo sitio:
                    manuales de uso, especificaciones del hardware embarcado,
                    guías de integración y políticas de privacidad.
                </p>

                <div className="documentation-header-stats">
                    <div className="documentation-header-stat">
                        <span className="documentation-header-stat-value">12</span>
                        <span className="documentation-header-stat-label">Documentos</span>
                    </div>
                    <div className="documentation-header-stat-divider"></div>
                    <div className="documentation-header-stat">
                        <span className="documentation-header-stat-value">PDF</span>
                        <span className="documentation-header-stat-label">Formato</span>
                    </div>
                    <div className="documentation-header-stat-divider"></div>
                    <div className="documentation-header-stat">
                        <span className="documentation-header-stat-value">12/06/2026</span>
                        <span className="documentation-header-stat-label">Versión actual</span>
                    </div>
                </div>
            </div>
        </section>
    )
}