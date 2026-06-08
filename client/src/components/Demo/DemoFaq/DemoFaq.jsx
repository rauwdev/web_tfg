import { useState } from "react"
import "./DemoFaq.css"

const faqs = [
    {
        question: "¿Cuánto dura el periodo de prueba?",
        answer: "El kit de evaluación incluye 14 días completos de acceso a la plataforma y uso del dispositivo. Si necesitas más tiempo, podemos extenderlo con coste adicional."
    },
    {
        question: "¿Qué incluye el kit?",
        answer: "Un dispositivo preconfigurado, cableado de instalación, acceso completo al dashboard web de telemetría y soporte técnico dedicado durante todo el periodo."
    },
    {
        question: "¿Es compatible con mi vehículo?",
        answer: "El sistema es compatible con cualquier vehículo con puerto OBD-II (la mayoría de vehículos fabricados desde 2004). En el formulario puedes indicarnos tu vehículo y te confirmamos la compatibilidad."
    },
    {
        question: "¿Tiene algún coste?",
        answer: "El periodo de prueba es completamente gratuito y sin compromiso. Solo pedimos la devolución del dispositivo al finalizar la evaluación si decides no continuar."
    },
    {
        question: "¿Cómo se instala el dispositivo?",
        answer: "La instalación es plug & play, se conecta al puerto OBD-II del vehículo en menos de 5 minutos. No requiere herramientas ni modificaciones en el vehículo."
    }
]

export default function DemoFaq() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="demo-faq-section">
            <div className="demo-faq-header">
                <span className="demo-faq-label">Preguntas frecuentes</span>
            </div>

            <div className="demo-faq-list">
                {faqs.map((faq, i) => (
                    <button
                        key={i}
                        className={`demo-faq-item ${openIndex === i ? "demo-faq-item--open" : ""}`}
                        onClick={() => toggle(i)}
                    >
                        <div className="demo-faq-question">
                            <span>{faq.question}</span>
                            <span className="demo-faq-icon">{openIndex === i ? "−" : "+"}</span>
                        </div>
                        {openIndex === i && (
                            <p className="demo-faq-answer">{faq.answer}</p>
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}