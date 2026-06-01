import "./TechnologyCards.css"

export default function TechnologyCards() {
    const sensors = [
        {
            id: 1,
            title: "ADXL345",
            description: "Acelerómetro de 3 ejes con resolución de 13 bits. Mide fuerzas G en los ejes X, Y y Z para detectar impactos y cambios bruscos de velocidad.",
            image: "https://i.imgur.com/bBsHUfx.png"
        },
        {
            id: 2,
            title: "HX711",
            description: "Amplificador de celda de carga de 24 bits. Convierte la señal analógica de los sensores de peso en los asientos en datos digitales de alta precisión.",
            image: "https://i.imgur.com/yHmc0Gl.png"
        },
        {
            id: 3,
            title: "ESPs1",
            description: "Microcontrolador con WiFi integrado. Actúa como unidad central de procesamiento, recopilando datos de todos los sensores y transmitiéndolos al servidor en tiempo real.",
            image: "https://i.imgur.com/JI7VsWw.png"
        },
        {
            id: 4,
            title: "Microswitch",
            description: "Interruptor mecánico de contacto. Detecta el estado del cinturón de seguridad (abrochado/desabrochado) con respuesta instantánea y sin falsos positivos.",
            image: "https://i.imgur.com/Jb9bTzX.png"
        }
    ]

    return (
        <section className="technology">
            <div className="technology-header">
                <div className="technology-badge">
                    <span className="technology-badge-dot"></span>
                    <span className="technology-badge-text">TECNOLOGÍA</span>
                </div>
                <h1 className="technology-title">Nuestro stack de sensores</h1>
                <p className="technology-subtitle">
                    Cada componente ha sido seleccionado para ofrecer el balance perfecto entre fiabilidad y bajo costo.
                </p>
            </div>
            <div className="technology-grid">
                {sensors.map((sensor) => (
                    <div key={sensor.id} className="technology-card">
                        <div className="technology-card-image">
                            <img src={sensor.image} alt={sensor.title} />
                        </div>
                        <div className="technology-card-content">
                            <h3 className="technology-card-title">{sensor.title}</h3>
                            <p className="technology-card-description">{sensor.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}