import { NavLink } from "react-router-dom"
import "./CTA.css"

export default function CTA() {
    return (
        <section className="cta">
            <div className="cta-card">
                <div className="cta-badge">
                    <span className="cta-badge-dot"></span>
                    <span className="cta-badge-text">KITS DEMO EN 14 DÍAS</span>
                </div>
                <h2 className="cta-title">
                    ¿Quieres montar un SOR-1<br />
                    en tu banco de pruebas o vehículo?
                </h2>
                <p className="cta-subtitle">
                    Cuéntanos sobre tu plataforma — vehículo, cableado e ITV.
                    Te enviamos un kit, un técnico de montaje y 30 días de pruebas en cloud.
                </p>
                <div className="cta-actions">
                    <NavLink to="/demo" className="cta-primary">
                        Solicitar kit de prueba →
                    </NavLink>
                    <NavLink to="/" className="cta-secondary">
                        Contáctanos
                    </NavLink>
                </div>
            </div>
        </section>
    )
}