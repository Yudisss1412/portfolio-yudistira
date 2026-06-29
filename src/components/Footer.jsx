export default function Footer({ setPage }) {
  const handleNav = (targetPage, sectionId) => {
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
    <footer className="bg-bg-secondary border-t border-border py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Left: Branding & Role */}
        <div className="text-center md:text-left space-y-1">
          <button 
            onClick={() => handleNav('home')} 
            className="text-base font-black text-accent hover:opacity-80 transition-opacity"
          >
            Yudistira
          </button>
          <p className="text-text-muted text-xs">Web Developer & Enthusiast</p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-wrap justify-center gap-6 font-bold text-text-secondary text-xs sm:text-sm">
          <button onClick={() => handleNav('home')} className="hover:text-accent transition-colors">Home</button>
          <button onClick={() => handleNav('projects')} className="hover:text-accent transition-colors">Projects</button>
          <button onClick={() => handleNav('home', 'skills')} className="hover:text-accent transition-colors">Skills</button>
          <button onClick={() => handleNav('home', 'contact')} className="hover:text-accent transition-colors">Contact</button>
        </div>

        {/* Right: Copyright */}
        <div className="text-text-muted text-xs text-center md:text-right">
          &copy; 2026 Yudistira. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
