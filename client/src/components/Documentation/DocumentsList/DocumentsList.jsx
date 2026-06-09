import { useState } from "react"
import "./DocumentsList.css"

const documents = [
    {
        id: "manual-usuario",
        title: "Memoria",
        description: "Memoria completa sobre el proyecto intermodular.",
        file: "/documents/PI.26SMR.09_memoria.pdf",
        size: "1.2 MB",
        pages: 14
    },
    {
        id: "anexo1",
        title: "Anexo 1: Hardware",
        description: "Detalles ténicos sobre la solución propuesta en hardware y su funcionamiento.",
        file: "/documents/PI.26SMR.09_anexo_1.pdf",
        size: "xx MB",
        pages: 0
    },
    {
        id: "anexo2",
        title: "Anexo 2: Desarrollo web",
        description: "Detalles técnicos sobre el desarrollo de la aplicación web.",
        file: "/documents/PI.26SMR.09_anexo_2.pdf",
        size: "1.3 MB",
        pages: 11
    },
    {
        id: "anexo3",
        title: "Anexo 3: Puesta en producción",
        description: "Detalles ténicos sobre la puesta en producción de la aplicación web.",
        file: "/documents/PI.26SMR.09_anexo_3.pdf",
        size: "1.1 MB",
        pages: 4
    },
    {
        id: "presupuesto",
        title: "Presupuesto",
        description: "Detalles sobre la partida presupuestaria necesaria para el desarrollo del producto.",
        file: "/documents/PI.26SMR.09_presupuesto.pdf",
        size: "4.6 MB",
        pages: 3
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