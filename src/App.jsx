import { Suspense, lazy, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import CaseStudy from './components/CaseStudy';
import ContactPage from './components/ContactPage';
import DarkModeToggle from './components/DarkModeToggle';

// Lazy-loaded: pulls in react-pdf only when the CV page is opened
const CvPage = lazy(() => import('./components/CvPage'));

function App() {
  const [page, setPage] = useState('home'); // 'home', 'projects', 'case-study', 'contact', 'cv'
  const [caseStudyId, setCaseStudyId] = useState('akrab');
  const [projectMode, setProjectMode] = useState('web'); // 'web' or 'video'

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 flex flex-col justify-between">
        <DarkModeToggle />
        <div className="relative z-10 flex-1">
          <Navbar page={page} setPage={setPage} />

          {/* Page transition: fade + slight slide, waits for the old page to exit */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {page === 'home' && (
                <Home setPage={setPage} setProjectMode={setProjectMode} />
              )}

              {page === 'projects' && (
                <ProjectsPage setPage={setPage} setCaseStudyId={setCaseStudyId} projectMode={projectMode} setProjectMode={setProjectMode} />
              )}

              {page === 'case-study' && (
                <CaseStudy caseStudyId={caseStudyId} setPage={setPage} />
              )}

              {page === 'contact' && (
                <ContactPage />
              )}

              {page === 'cv' && (
                <Suspense
                  fallback={
                    <div className="pt-32 pb-32 text-center text-text-secondary text-sm">
                      Loading CV…
                    </div>
                  }
                >
                  <CvPage setPage={setPage} />
                </Suspense>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
