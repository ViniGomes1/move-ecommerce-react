import { Document, Page, pdfjs } from "react-pdf"
import { useState } from 'react';
import Logo from  '../../assets/Logos/gemini-svg.svg?react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PdfContainer({ pdfFile }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const nextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages));
    };

    const prevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>

                <span>
                    Página {pageNumber} de {numPages || '--'}
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                <div>
                    <button onClick={prevPage} disabled={pageNumber <= 1}>
                        Anterior
                    </button>
                </div>

                <div style={{ border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
                    <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} height={750} ></Page>
                    </Document>
                </div>
                
                <button onClick={nextPage} disabled={pageNumber >= numPages}>
                    Próxima
                </button>
            </div>
        </div>
    );
}