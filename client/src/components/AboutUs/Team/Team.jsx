import "./Team.css"

export default function Team() {
    return (
        <section className="team">
            <div className="team-header">
                <span className="team-badge">EQUIPO</span>
                <h2 className="team-title">Las personas detrás del proyecto</h2>
            </div>
            <div className="team-grid">
                <div className="team-card">
                    <div className="team-card-avatar">RD</div>
                    <h3 className="team-card-name">Raúl Cristian Dumitru Tanase</h3>
                    <span className="team-card-tag">Estudiante de SMR</span>
                </div>
                <div className="team-card">
                    <div className="team-card-avatar">JM</div>
                    <h3 className="team-card-name">José Adriel Marcos Sánchez</h3>
                    <span className="team-card-tag">Estudiante de SMR</span>
                </div>
            </div>
        </section>
    )
}