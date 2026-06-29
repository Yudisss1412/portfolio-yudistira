import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home'); // 'home', 'projects', 'case-study'
  const [caseStudyId, setCaseStudyId] = useState('akrab');

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 flex flex-col justify-between">
      <div className="flex-1">
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
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
