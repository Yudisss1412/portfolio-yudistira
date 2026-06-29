import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import CaseStudy from './components/CaseStudy';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [page, setPage] = useState('home'); // 'home', 'projects', 'case-study', 'contact'
  const [caseStudyId, setCaseStudyId] = useState('akrab');

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 flex flex-col justify-between">
      <DarkModeToggle />
      <div className="relative z-10 flex-1">
        <Navbar page={page} setPage={setPage} />
        
        {page === 'home' && (
          <Home setPage={setPage} setCaseStudyId={setCaseStudyId} />
        )}

        {page === 'projects' && (
          <ProjectsPage setPage={setPage} setCaseStudyId={setCaseStudyId} />
        )}

        {page === 'case-study' && (
          <CaseStudy caseStudyId={caseStudyId} setPage={setPage} />
        )}

        {page === 'contact' && (
          <ContactPage />
        )}
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
