import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const primaryLinks = [
    { label: 'PROJECTS', href: '#projects', active: false },
    { label: 'WE DO', href: '#wedo', active: true },
    { label: 'SOCIAL PROJECTS', href: '#social', active: false },
  ];

  const secondaryLinks = [
    { label: 'WHO WE ARE', href: '#who' },
    { label: 'CAREER', href: '#career' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-border">
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Burger + Primary Nav */}
        <div className="flex items-center gap-6">
          {/* Burger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Primary Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`pb-1 transition-colors ${
                  link.active
                    ? 'text-white border-b-2 border-accent'
                    : 'text-gray-text hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Search + Secondary Nav */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="text-gray-text hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Secondary Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-medium tracking-widest text-gray-text">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-white hover:text-accent"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-6 text-2xl font-bold tracking-widest">
            {[...primaryLinks, ...secondaryLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  link.active ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
