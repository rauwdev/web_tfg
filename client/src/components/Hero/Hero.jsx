import "./Hero.css"
import { NavLink } from "react-router-dom"
import HeroDashboard from "./HeroDashboard"

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-badge">ISO 26262 · ASIL-B · IATF 16949</p>
                        <h1 className="hero-title">
                            Detección de accidentes
                            <span className="hero-highlight"> efectiva</span>
                        </h1>
                        <p className="hero-description">
                            Un stack de sensores de baja latencia (Sub-40ms) con un centro de
                            comunicaciones para el control y redirección de recursos de
                            emergencias. Todo integrado en una sola plataforma.
                        </p>
                        <div className="hero-actions">
                            <NavLink to="/demo">
                                <a className="hero-cta-primary">Solicitar un kit de prueba →</a>                    
                            </NavLink>
                            <NavLink to="/documentation">
                                <a className="hero-cta-secondary">Ver documentación</a>
                            </NavLink>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-value">38<sub>ms</sub></span>
                                <span className="hero-stat-label">DE LATENCIA MEDIA</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-value">99.6<sub>%</sub></span>
                                <span className="hero-stat-label">DE PRECISION</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat-value">−20 → 30<sub>°C</sub></span>
                                <span className="hero-stat-label">RANGO OPERATIVO</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-dashboard">
                        <HeroDashboard></HeroDashboard>
                    </div>
                </div>
            </section>
            <hr className="hero-divider" />
        </>
    )
}