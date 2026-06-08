import { useState } from "react"
import "./DocumentsList.css"

const documents = [
    {
        id: "manual-usuario",
        title: "Manual de usuario",
        description: "Guía completa para usar la plataforma, registrar vehículos y consultar telemetría.",
        file: "/documents/prueba.pdf",
        size: "2.4 MB",
        pages: 42
    },
    {
        id: "especificaciones",
        title: "Especificaciones hardware",
        description: "Detalles técnicos del dispositivo embarcado: sensores, conectividad y protocolos.",
        file: "/documentos/especificaciones.pdf",
        size: "1.1 MB",
        pages: 18
    },
    {
        id: "privacidad",
        title: "Política de privacidad",
        description: "Tratamiento de datos personales y de telemetría conforme al RGPD.",
        file: "/documentos/privacidad.pdf",
        size: "320 KB",
        pages: 8
    }
]

export default function DocumentsList() {
    const [selectedDoc, setSelectedDoc] = useState(null)

    return (
        <>
            <section className="documents-section">
                <div className="documents-section-header">
                    <span className="documents-section-title">Documentos disponibles</span>
                    <span className="documents-section-count">{documents.length} archivos</span>
                </div>

                <div className="documents-grid">
                    {documents.map(doc => (
                        <button key={doc.id} className="document-card" onClick={() => setSelectedDoc(doc)}>
                            <div className="document-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                    <polyline points="14 3 14 9 20 9"/>
                                    <line x1="8" y1="13" x2="16" y2="13"/>
                                    <line x1="8" y1="17" x2="14" y2="17"/>
                                </svg>
                            </div>

                            <div className="document-card-content">
                                <span className="document-card-title">{doc.title}</span>
                                <span className="document-card-description">{doc.description}</span>
                                <div className="document-card-meta">
                                    <span className="document-card-meta-item">{doc.pages} páginas</span>
                                    <span className="document-card-meta-divider">·</span>
                                    <span className="document-card-meta-item">{doc.size}</span>
                                </div>
                            </div>

                            <div className="document-card-arrow">→</div>
                        </button>
                    ))}
                </div>
            </section>
            {selectedDoc && (
                <div className="doc-modal-overlay" onClick={() => setSelectedDoc(null)}>
                    <div className="doc-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="doc-modal-header">
                            <span className="doc-modal-title">{selectedDoc.title}</span>
                            <button className="doc-modal-close" onClick={() => setSelectedDoc(null)}>✕</button>
                        </div>
                        <iframe 
                            src={selectedDoc.file} 
                            className="doc-modal-iframe"
                            title={selectedDoc.title}
                        />
                    </div>
                </div>
            )}
        </>
    )
}