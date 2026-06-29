import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (targetPage, sectionId) => {
    setMenuOpen(false);
    setPage(targetPage);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/85 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="text-xl font-black text-accent tracking-tight hover:opacity-80 transition-opacity"
        >
          Yudistira
        </button>

        {/* Center: Main Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-text-secondary">
          <button
            onClick={() => handleNav('home')}
            className={`hover:text-accent transition-colors relative py-1 ${
              page === 'home' ? 'text-accent border-b-2 border-accent' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('projects')}
            className={`hover:text-accent transition-colors relative py-1 ${
              page === 'projects' || page === 'case-study' ? 'text-accent border-b-2 border-accent' : ''
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('home', 'skills')}
            className="hover:text-accent transition-colors py-1"
          >
            Skills
          </button>
          <button
            onClick={() => handleNav('home', 'contact')}
            className="hover:text-accent transition-colors py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <a
            href="/CV Yudistira Dwi Anggara.pdf"
            download
            className="hidden sm:inline-block bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-xs hover:shadow-md transition-all text-center"
          >
            Download CV
          </a>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-bold text-text-secondary">
            <button
              onClick={() => handleNav('home')}
              className={`text-left py-2 ${page === 'home' ? 'text-accent' : 'hover:text-accent'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('projects')}
              className={`text-left py-2 ${page === 'projects' || page === 'case-study' ? 'text-accent' : 'hover:text-accent'}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNav('home', 'skills')}
              className="text-left py-2 hover:text-accent"
            >
              Skills
            </button>
            <button
              onClick={() => handleNav('home', 'contact')}
              className="text-left py-2 hover:text-accent"
            >
              Contact
            </button>
            <a
              href="/CV Yudistira Dwi Anggara.pdf"
              download
              className="mt-2 w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl text-center text-sm shadow-sm"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
