import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { caseStudies } from '../data/caseStudiesData';

export default function CaseStudy({ caseStudyId, setPage }) {
  const currentStudy = caseStudies[caseStudyId];

  if (!currentStudy) {
    return (
      <div className="pt-32 pb-16 px-6 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Studi kasus tidak ditemukan</h2>
        <button onClick={() => setPage('home')} className="text-accent font-bold hover:underline"> Kembali ke Beranda</button>
      </div>
    );
  }

  const handleBackToProjects = () => {
    setPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto space-y-16">
      {/* 1. HEADER BREADCRUMB & TITLE */}
      <div className="space-y-4 text-left">
        <button 
          onClick={handleBackToProjects}
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent font-bold text-xs sm:text-sm transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </button>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-accent uppercase tracking-widest">
            <span>📄 Case Study</span>
            <span className="text-text-muted">•</span>
            <span>{currentStudy.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight">
            {currentStudy.title}
          </h1>
        </div>
      </div>

      {/* 2. FEATURED IMAGE (Browser frame) */}
      <motion.div 
        className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-bg-secondary aspect-[16/9]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={currentStudy.featuredImage} 
          alt={currentStudy.title} 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        {/* Browser dots */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/35 to-transparent flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
      </motion.div>

      {/* 3. TWO COLUMNS LAYOUT: Vision + Problems/Solutions VS Sidebar Metadata */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-text-primary border-l-4 border-accent pl-3">The Vision</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {currentStudy.vision}
            </p>
          </div>

          {/* Problems & Solutions (Stacked vertically or side-by-side in custom panels) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problems panel */}
            <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-950/30 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 text-sm sm:text-base">
                <FaExclamationCircle /> Key Problems Identified
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                {currentStudy.problems.map((prob, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions panel */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-950/30 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm sm:text-base">
                <FaCheckCircle /> Implemented Solutions
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                {currentStudy.solutions.map((sol, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column / Sidebar (1/3 width) */}
        <div className="bg-bg-secondary border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-3 text-sm sm:text-base">Project Metadata</h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-text-muted">Role</span>
                <span className="font-bold text-text-primary text-right">{currentStudy.role}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-text-muted">Industry</span>
                <span className="font-bold text-text-primary text-right">{currentStudy.industry}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={currentStudy.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-full font-bold px-4 py-3 rounded-xl border border-border hover:border-accent hover:text-accent text-center text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 ${
                currentStudy.githubUrl === '#' ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              <FaGithub /> Source Code
            </a>
            <a 
              href={currentStudy.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-full bg-accent hover:bg-accent-dark text-white font-bold px-4 py-3 rounded-xl shadow-sm text-center text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 ${
                currentStudy.liveUrl === '#' ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              <FaExternalLinkAlt /> View Live Site
            </a>
          </div>
        </div>
      </div>

      {/* 4. TECHNICAL ECOSYSTEM */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-text-primary border-l-4 border-accent pl-3">Technical Ecosystem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {currentStudy.technologies.map((tech, i) => (
            <div key={i} className="bg-bg-secondary border border-border rounded-2xl p-5 space-y-2 hover:border-accent transition-colors shadow-xxs">
              <div className="w-8 h-8 rounded-lg bg-accent-soft text-accent flex items-center justify-center font-bold text-xs">
                {tech.name.substring(0, 2).toUpperCase()}
              </div>
              <h4 className="font-bold text-text-primary text-sm sm:text-base">{tech.name}</h4>
              <p className="text-text-muted text-xxs sm:text-xs leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. VISUAL EXPERIENCE GALLERY */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-text-primary border-l-4 border-accent pl-3">Visual Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentStudy.mockups.map((mockup, i) => (
            <div key={i} className="bg-bg-secondary border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] bg-slate-50 border-b border-border">
                <img 
                  src={mockup.image} 
                  alt={mockup.title} 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                {/* Browser dots */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/15 to-transparent flex items-center px-3 gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-bold text-text-primary text-sm sm:text-base">{mockup.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{mockup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. INTERESTED CTA & FOOTER SWITCH BUTTONS */}
      <div className="bg-bg-secondary border border-border rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-sm max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-black text-text-primary">Interested in the results?</h3>
        <p className="text-text-secondary text-xs sm:text-sm max-w-md mx-auto">
          Explore more of my digital solutions or head back to the landing page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleBackToProjects}
            className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            View More Projects
          </button>
          <button 
            onClick={handleBackToHome}
            className="bg-transparent hover:bg-bg-primary text-text-primary border-2 border-border hover:border-accent font-bold px-6 py-3 rounded-xl transition-all text-xs sm:text-sm"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
