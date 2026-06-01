import "./Mission.css"

export default function Mission() {
    return (
        <section className="mission">
            <div className="mission-grid">
                <div className="mission-card">
                    <span className="mission-card-number">01</span>
                    <h3 className="mission-card-title">El problema</h3>
                    <p className="mission-card-text">
                        Cada año, miles de accidentes no se detectan a tiempo. Los sistemas 
                        actuales de detección son caros y limitados a vehículos 
                        de gama alta.
                    </p>
                </div>
                <div className="mission-card">
                    <span className="mission-card-number">02</span>
                    <h3 className="mission-card-title">Nuestra solución</h3>
                    <p className="mission-card-text">
                        Un stack de sensores de bajo coste con un sistema de alertas en tiempo 
                        real. Detección sub-40ms, análisis de zona de impacto y notificación 
                        personalizada a servicios de emergencia.
                    </p>
                </div>
                <div className="mission-card">
                    <span className="mission-card-number">03</span>
                    <h3 className="mission-card-title">El objetivo</h3>
                    <p className="mission-card-text">
                        Reducir el tiempo de respuesta de emergencias. Cada segundo cuenta 
                        en la hora de oro — nuestra plataforma elimina la larga espera entre el 
                        impacto, la detección y la llamada al 112.
                    </p>
                </div>
            </div>
        </section>
    )
}