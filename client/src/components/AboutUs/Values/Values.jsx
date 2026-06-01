import "./Values.css"

export default function Values() {
    return (
        <section className="values">
            <div className="values-header">
                <span className="values-badge">NUESTROS PILARES</span>
                <h2 className="values-title">En qué creemos</h2>
            </div>
            <div className="values-grid">
                <div className="values-card">
                    <span className="values-card-icon">⚡</span>
                    <h3 className="values-card-title">Velocidad</h3>
                    <p className="values-card-text">
                        Cada milisegundo cuenta. Nuestro sistema detecta impactos en menos de 
                        40ms y notifica nuestro communication center de forma automática.
                    </p>
                </div>
                <div className="values-card">
                    <span className="values-card-icon">🔓</span>
                    <h3 className="values-card-title">Accesibilidad</h3>
                    <p className="values-card-text">
                        La seguridad no debería ser un lujo. Diseñamos para que cualquier 
                        vehículo pueda integrar detección de accidentes sin importar su gama.
                    </p>
                </div>
                <div className="values-card">
                    <span className="values-card-icon">🛡️</span>
                    <h3 className="values-card-title">Fiabilidad</h3>
                    <p className="values-card-text">
                        Certificación ASIL-B, tests en condiciones extremas y redundancia 
                        en cada capa del sistema. Cuando importa, funciona.
                    </p>
                </div>
            </div>
        </section>
    )
}