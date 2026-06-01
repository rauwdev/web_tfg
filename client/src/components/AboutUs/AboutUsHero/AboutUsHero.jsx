import "./AboutUsHero.css"

export default function AboutUsHero() {
    return (
        <section className="aboutus-hero">
            <div className="aboutus-hero-badge">
                <span className="aboutus-hero-badge-dot"></span>
                <span className="aboutus-hero-badge-text">SOBRE NOSOTROS</span>
            </div>
            <h1 className="aboutus-hero-title">
                Seguridad al volante<br />
                accesible para todos.
            </h1>
            <p className="aboutus-hero-subtitle">
                Safe On Route nace como un proyecto académico con una ambición real: 
                democratizar la detección de accidentes con hardware asequible.
            </p>
        </section>
    )
}