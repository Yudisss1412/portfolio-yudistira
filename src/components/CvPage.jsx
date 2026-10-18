import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFile } from 'react-icons/fa';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Worker must be configured in the same module that renders <Document>/<Page>,
// otherwise react-pdf's default value may overwrite it (module execution order).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CV_FILE = './CV Yudistira Dwi Anggara.pdf';

export default function CvPage({ setPage }) {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const viewerRef = useRef(null);

  const handleBack = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return undefined;

    const update = () => setPageWidth(el.clientWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleLoadSuccess = useCallback((pdf) => {
    setNumPages(pdf.numPages);
  }, []);

  return (
    <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto space-y-8">
      {/* 1. HEADER: BACK BUTTON, TITLE & ACTIONS */}
      <div className="space-y-4 text-left">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent font-bold text-xs sm:text-sm transition-colors group cursor-pointer"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-accent uppercase tracking-widest">
              <span>📄 Curriculum Vitae</span>
              {numPages > 0 && (
                <>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-muted">{numPages} pages</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight">
              Yudistira Dwi Anggara
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl">
              Full-stack web developer based in Indonesia. Read the resume below, or grab the PDF copy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={CV_FILE}
              download
              className="bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <FaDownload /> Download PDF
            </a>
            <a
              href={CV_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-bg-secondary text-text-primary border-2 border-border hover:border-accent font-bold px-5 py-3 rounded-xl transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <FaExternalLinkAlt /> Open in New Tab
            </a>
          </div>
        </div>
      </div>

      {/* 2. PDF VIEWER (paper stays white in both themes) */}
      <motion.div
        className="rounded-3xl border border-border bg-bg-secondary p-3 sm:p-5 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div ref={viewerRef} className="w-full">
          <Document
            file={CV_FILE}
            suspense={false}
            onLoadSuccess={handleLoadSuccess}
            loading={
              <div className="flex flex-col items-center gap-3 py-20 text-text-secondary text-sm">
                <span className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
                <span>Loading CV…</span>
              </div>
            }
            error={
              <div className="flex flex-col items-center gap-4 py-20 text-center px-4">
                <FaFile className="text-3xl text-text-muted" />
                <p className="text-text-secondary text-sm max-w-sm">
                  Failed to load the CV preview. You can download the PDF directly instead.
                </p>
                <a
                  href={CV_FILE}
                  download
                  className="bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer"
                >
                  Download PDF
                </a>
              </div>
            }
            className="flex flex-col items-center gap-6"
          >
            {pageWidth > 0 &&
              Array.from({ length: numPages }, (_, i) => i + 1).map((pageNumber) => (
                <div
                  key={pageNumber}
                  className="w-full flex justify-center bg-white rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
                >
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderTextLayer
                    renderAnnotationLayer
                    className="max-w-full"
                  />
                </div>
              ))}
          </Document>
        </div>
      </motion.div>
    </div>
  );
}