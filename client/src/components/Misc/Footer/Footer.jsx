import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo.svg"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-divider-full"></div>
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Safe On Route" className="footer-logo-icon" />
                            <span className="footer-logo-text">Safe On Route</span>
                        </div>
                        <p className="footer-brand-description">
                            Detección de accidentes para vehículos. Diseñado para el usuario final con un precio mínimo.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <span className="footer-column-title">PLATAFORMA</span>
                            <NavLink to="/" className="footer-link">Unidad SOR-1</NavLink>
                            <NavLink to="/" className="footer-link">Inferencia</NavLink>
                            <NavLink to="/" className="footer-link">Dashboard</NavLink>
                            <NavLink to="/" className="footer-link">Documentación</NavLink>
                        </div>

                        <div className="footer-column">
                            <span className="footer-column-title">DEVELOPERS</span>
                            <NavLink to="/" className="footer-link">API</NavLink>
                            <NavLink to="/" className="footer-link">Webhooks</NavLink>
                            <NavLink to="/" className="footer-link">Github</NavLink>
                            <NavLink to="/" className="footer-link">Status</NavLink>
                        </div>

                        <div className="footer-column">
                            <span className="footer-column-title">COMPAÑÍA</span>
                            <NavLink to="/" className="footer-link">Sobre nosotros</NavLink>
                            <NavLink to="/" className="footer-link">Demo kit</NavLink>
                            <NavLink to="/" className="footer-link">Empleo</NavLink>
                            <NavLink to="/" className="footer-link">Contacto</NavLink>
                        </div>

                        <div className="footer-column">
                            <span className="footer-column-title">COMPLIANCE</span>
                            <NavLink to="/" className="footer-link">ISO 26262</NavLink>
                            <NavLink to="/" className="footer-link">IATF 16949</NavLink>
                            <NavLink to="/" className="footer-link">SOC 2 Type II</NavLink>
                            <NavLink to="/" className="footer-link">GDPR / DSGVO</NavLink>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <span className="footer-copyright">© 2026 Safe On Route · Logroño · España</span>
                    <span className="footer-status">v1.4.2 · todos los derechos reservados <span className="footer-status-dot"></span></span>
                </div>
            </div>
        </footer>
    )
}