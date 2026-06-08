import "./DemoForm.css"
import { useState } from "react"

export default function DemoForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section className="demo-form-section">
                <div className="demo-form-success">
                    <span className="demo-form-success-icon">✓</span>
                    <h2 className="demo-form-success-title">Solicitud enviada</h2>
                    <p className="demo-form-success-text">
                        Nos pondremos en contacto contigo en las próximas 24-48 horas.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="demo-form-section">
            <div className="demo-form-header">
                <span className="demo-form-label">Formulario de solicitud</span>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
                <div className="demo-form-row">
                    <div className="demo-form-field">
                        <label className="demo-form-field-label">Nombre completo</label>
                        <input type="text" className="demo-form-input" placeholder="Tu nombre" required />
                    </div>
                    <div className="demo-form-field">
                        <label className="demo-form-field-label">Email</label>
                        <input type="email" className="demo-form-input" placeholder="tu@empresa.com" required />
                    </div>
                </div>

                <div className="demo-form-row">
                    <div className="demo-form-field">
                        <label className="demo-form-field-label">Empresa / Flota</label>
                        <input type="text" className="demo-form-input" placeholder="Nombre de tu empresa" required />
                    </div>
                    <div className="demo-form-field">
                        <label className="demo-form-field-label">Número de vehículos</label>
                        <input type="number" className="demo-form-input" placeholder="Ej: 25" min="1" required />
                    </div>
                </div>

                <div className="demo-form-field">
                    <label className="demo-form-field-label">Mensaje (opcional)</label>
                    <textarea className="demo-form-textarea" placeholder="Cuéntanos sobre tu caso de uso..." rows="4"></textarea>
                </div>

                <button type="submit" className="demo-form-submit">Solicitar kit de prueba →</button>
            </form>
        </section>
    )
}