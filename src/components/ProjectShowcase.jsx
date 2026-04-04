import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import { ParallaxElement, ParallaxBackground } from './ParallaxScroll';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: 'AKRAB',
      label: 'E-Commerce AKRAB',
      featured: 'FEATURED PROJECT',
      title: 'E-COMMERCE',
      titleAccent: 'AKRAB',
      description: 'Platform E-Commerce AKRAB merupakan solusi digital terintegrasi yang dirancang untuk mendigitalisasi ekosistem perdagangan pada Paguyuban UMKM AKRAB di Banyuwangi. Proyek ini dibangun dengan fokus pada kemudahan pengelolaan inventaris dan perluasan jangkauan pasar bagi para pelaku usaha lokal melalui antarmuka yang modern dan fungsional.',
      highlights: [
        {
          title: 'Sistem Manajemen Inventaris Terpadu:',
          desc: 'Fitur pengelolaan stok, kategori, dan katalog produk yang dirancang khusus agar mudah dioperasikan oleh admin UMKM.',
        },
        {
          title: 'Implementasi Metodologi PXP:',
          desc: 'Seluruh alur pengembangan mengikuti disiplin Personal Extreme Programming (Planning, Design, Coding, Testing) untuk menjamin kualitas dan reliabilitas kode.',
        },
        {
          title: 'Arsitektur Database Terstruktur:',
          desc: 'Pengoptimalan skema MySQL untuk memastikan integritas data dan kecepatan akses informasi produk yang efisien.',
        },
        {
          title: 'Antarmuka Responsif & Adaptif:',
          desc: 'Optimasi tampilan menggunakan Tailwind CSS guna memberikan pengalaman belanja yang mulus di berbagai perangkat (mobile & desktop).',
        },
      ],
      technologies: [
        'Laravel (Core Backend & Routing)',
        'MySQL (Database Management)',
        'Tailwind CSS (Modern UI Styling)',
        'JavaScript (Interaktivitas Client-side)',
        'PXP Methodology (Alur Pengembangan Sistem)',
      ],
      mockups: [
        {
          title: 'Dashboard Admin',
          description: 'Panel admin untuk mengelola produk, pesanan, dan data pelanggan UMKM.',
          color: 'from-orange-400 to-amber-500',
        },
        {
          title: 'Katalog Produk',
          description: 'Tampilan katalog dengan filter kategori dan pencarian produk.',
          color: 'from-yellow-400 to-orange-500',
        },
        {
          title: 'Keranjang Belanja',
          description: 'Fitur keranjang dengan update quantity real-time.',
          color: 'from-amber-400 to-yellow-500',
        },
        {
          title: 'Halaman Checkout',
          description: 'Proses pembayaran terintegrasi dengan konfirmasi pesanan.',
          color: 'from-orange-500 to-amber-600',
        },
        {
          title: 'Manajemen Inventaris',
          description: 'Sistem pengelolaan stok dan kategori produk untuk admin UMKM.',
          color: 'from-amber-500 to-orange-600',
        },
      ],
    },
    {
      name: 'TANITALK_V2',
      label: 'TaniTalk V2',
      featured: 'TEAM PROJECT',
      title: 'AGRICULTURAL',
      titleAccent: 'TANITALK',
      description: 'TaniTalk V2 merupakan sistem informasi pertanian berbasis web yang dirancang untuk memberdayakan komunitas petani lokal. Platform ini menyediakan akses mudah ke informasi pertanian, tips bertani, dan forum diskusi antar petani. Dibangun dengan vanilla PHP dan MySQL untuk menunjukkan kemampuan pengembangan web tanpa framework.',
      highlights: [
        {
          title: 'Sistem Autentikasi Lengkap:',
          desc: 'Fitur login, signup, dan session management yang aman untuk mengelola akses pengguna.',
        },
        {
          title: 'Custom PHP Architecture:',
          desc: 'Dibangun dari scratch tanpa framework, menunjukkan pemahaman mendalam tentang PHP core dan MVC pattern.',
        },
        {
          title: 'Database Design Terstruktur:',
          desc: 'Skema MySQL yang efisien untuk menyimpan data pengguna, konten pertanian, dan forum diskusi.',
        },
        {
          title: 'Antarmuka Simpel & Fungsional:',
          desc: 'Desain clean dan user-friendly yang mudah digunakan oleh petani dari berbagai kalangan.',
        },
      ],
      technologies: [
        'PHP 8+ (Backend Core)',
        'MySQL (Database Management)',
        'Vanilla JavaScript (Frontend Interactivity)',
        'CSS3 (Styling & Layout)',
        'Custom MVC Pattern (Architecture)',
      ],
      mockups: [
        {
          title: 'Homepage',
          description: 'Halaman utama dengan informasi pertanian dan navigasi.',
          color: 'from-green-400 to-emerald-500',
        },
        {
          title: 'Login Page',
          description: 'Sistem autentikasi untuk pengguna terdaftar.',
          color: 'from-teal-400 to-green-500',
        },
        {
          title: 'Dashboard',
          description: 'Panel pengguna dengan konten pertanian terbaru.',
          color: 'from-emerald-400 to-teal-500',
        },
        {
          title: 'Forum Diskusi',
          description: 'Tempat berbagi pengalaman antar petani.',
          color: 'from-green-500 to-lime-500',
        },
        {
          title: 'Database Schema',
          description: 'Struktur database yang terstruktur dan efisien.',
          color: 'from-lime-400 to-green-600',
        },
      ],
    },
    {
      name: 'IMK_CLOTHING',
      label: 'IMK Clothing Store',
      featured: 'ACADEMIC PROJECT',
      title: 'CLOTHING',
      titleAccent: 'E-COMMERCE',
      description: 'Website toko pakaian yang dibangun dari awal menggunakan vanilla HTML, CSS, dan JavaScript. Menampilkan desain modern dengan fitur login modal interaktif, product grid responsif, dan integrasi Font Awesome untuk ikon. Project akademik yang menunjukkan kemampuan frontend development tanpa framework.',
      highlights: [
        {
          title: 'Desain Frontend dari Scratch:',
          desc: 'Seluruh layout dan styling dibuat manual tanpa Bootstrap atau framework CSS, menunjukkan pemahaman mendalam tentang CSS.',
        },
        {
          title: 'Login Modal Interaktif:',
          desc: 'Sistem login dengan animasi input fields dan SVG graphics untuk tampilan yang modern dan user-friendly.',
        },
        {
          title: 'Product Grid Responsif:',
          desc: 'Layout produk yang adaptif dengan hover effects dan call-to-action buttons yang menarik.',
        },
        {
          title: 'Integrasi Social Media:',
          desc: 'Footer dengan link ke berbagai platform social media (Instagram, Facebook, Twitter, WhatsApp).',
        },
      ],
      technologies: [
        'HTML5 (Structure & Semantic)',
        'CSS3 (Custom Styling & Layout)',
        'Vanilla JavaScript (DOM Manipulation)',
        'Font Awesome (Icon Library)',
        'Responsive Design Principles',
      ],
      mockups: [
        {
          title: 'Homepage',
          description: 'Tampilan utama dengan hero section dan navigasi.',
          color: 'from-blue-400 to-purple-500',
        },
        {
          title: 'Login Modal',
          description: 'Form login dengan animasi dan SVG graphics.',
          color: 'from-purple-400 to-pink-500',
        },
        {
          title: 'Product Cards',
          description: 'Kartu produk dengan harga dan add-to-cart button.',
          color: 'from-pink-400 to-rose-500',
        },
        {
          title: 'Search Bar',
          description: 'Fitur pencarian produk yang intuitif.',
          color: 'from-rose-400 to-red-500',
        },
        {
          title: 'Footer & Social Links',
          description: 'Integrasi social media dan navigasi sekunder.',
          color: 'from-red-400 to-orange-500',
        },
      ],
    },
    {
      name: 'ZUMB_RESTAURANT',
      label: 'Zumb Restaurant',
      featured: 'ACADEMIC PROJECT',
      title: 'RESTAURANT',
      titleAccent: 'ZUMB',
      description: 'Website restoran keluarga yang menampilkan sistem pemesanan table interaktif, menu makanan grid dengan harga, dan fitur shopping cart dengan perhitungan total otomatis. Dibangun dengan HTML, CSS advanced (Grid, Flexbox, Custom Properties), dan CSS animations untuk pengalaman pengguna yang menarik.',
      highlights: [
        {
          title: 'Table Booking System:',
          desc: 'Sistem pemesanan meja interaktif dengan pilihan tanggal, waktu, dan jumlah orang untuk reservasi restoran.',
        },
        {
          title: 'Food Menu Grid Layout:',
          desc: 'Tampilan menu makanan modern menggunakan CSS Grid dengan harga, status ketersediaan, dan gambar produk.',
        },
        {
          title: 'Shopping Cart with Calculation:',
          desc: 'Fitur keranjang belanja dengan input quantity, perhitungan subtotal, tax, dan total otomatis.',
        },
        {
          title: 'Advanced CSS Animations:',
          desc: 'Efek hover pada tombol dengan fill animation, floating food images, dan smooth scroll navigation.',
        },
      ],
      technologies: [
        'HTML5 (Semantic structure)',
        'CSS3 (Grid, Flexbox, Custom Properties)',
        'CSS Animations (floating, hover effects)',
        'Google Fonts (Nunito)',
        'Responsive Design (Media Queries)',
      ],
      mockups: [
        {
          title: 'Homepage & Booking',
          description: 'Hero section dengan form booking table.',
          color: 'from-yellow-400 to-orange-500',
        },
        {
          title: 'Restaurant History',
          description: 'About section dengan floating food image.',
          color: 'from-orange-400 to-red-500',
        },
        {
          title: 'Food Menu Grid',
          description: 'Menu items dengan harga dan status.',
          color: 'from-red-400 to-pink-500',
        },
        {
          title: 'Shopping Cart',
          description: 'Cart table dengan quantity input.',
          color: 'from-pink-400 to-purple-500',
        },
        {
          title: 'Subtotal Calculation',
          description: 'Total keranjang dengan tax dan grand total.',
          color: 'from-purple-400 to-indigo-500',
        },
      ],
    },
  ];

  const currentProject = projects[activeProject];

  return (
    <div className="h-screen bg-bg-primary flex flex-col relative overflow-hidden">
      {/* Yellow Shape Background Element */}
      <ParallaxBackground
        elements={[
          {
            speed: 0.1,
            className: 'yellow-shape',
            style: { top: '5%', right: '10%' },
          },
          {
            speed: 0.15,
            className: 'yellow-shape',
            style: { bottom: '10%', left: '5%', width: '300px', height: '300px' },
          },
          {
            speed: 0.05,
            className: 'w-40 h-40 rounded-full bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl',
            style: { top: '40%', left: '30%' },
          },
        ]}
      />

      {/* Project Selector - Dropdown for Mobile, Tabs for Desktop */}
      <div className="relative z-20 px-3 xs:px-4 pt-3 xs:pt-4 sm:pt-6 md:pt-8">
        {/* Mobile Dropdown */}
        <div className="block lg:hidden">
          <select
            value={activeProject}
            onChange={(e) => setActiveProject(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border text-text-primary font-bold text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all cursor-pointer"
          >
            {projects.map((project, index) => (
              <option key={project.name} value={index}>
                {project.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div 
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 px-6 md:px-8 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                  activeProject === index
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-bg-secondary text-text-muted border border-border hover:border-accent hover:text-accent'
                }`}
                style={{ scrollSnapAlign: 'start' }}
              >
                {project.label}
              </button>
            ))}
          </div>
          
          {/* Active Tab Indicator Line - Desktop Only */}
          <div className="mt-2 h-0.5 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-transform duration-300 ease-out"
              style={{
                width: `${100 / projects.length}%`,
                transform: `translateX(${activeProject * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <motion.div
        className="flex-1 overflow-y-auto relative z-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-3 xs:pt-4 sm:pt-6 md:pt-8 pb-4 xs:pb-6 sm:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        key={activeProject}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          {/* LEFT SIDE - Project Description */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8">
            <div>
              <div className="inline-block bg-accent-soft text-accent px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs xs:text-sm font-bold mb-2 xs:mb-3 sm:mb-4">
                ✨ {currentProject.featured}
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-tight">
                {currentProject.title}
                <br />
                <span className="text-accent">{currentProject.titleAccent}</span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="bg-bg-secondary rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-border-light shadow-sm">
              <h3 className="text-sm xs:text-base font-bold text-text-primary mb-2 xs:mb-3">📋 Project Highlights</h3>
              <ul className="space-y-2 xs:space-y-3 text-text-secondary text-xs xs:text-sm">
                {currentProject.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>
                      <strong className="text-text-primary">{highlight.title}</strong>{' '}
                      {highlight.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-sm xs:text-base font-bold text-text-primary mb-2 xs:mb-3 sm:mb-4">🛠️ Technologies Used</h3>
              <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg-secondary px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl border border-border text-xs xs:text-sm font-semibold text-text-secondary hover:border-accent hover:text-accent hover:shadow-md transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
              <MagneticButton>
                <button className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-white font-bold px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-xs xs:text-sm sm:text-base w-full xs:w-auto glow">
                  View Live Demo →
                </button>
              </MagneticButton>
              <MagneticButton>
                <button className="bg-bg-secondary hover:bg-border-light text-text-primary font-bold px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg xs:rounded-xl sm:rounded-2xl border-2 border-border hover:border-accent transition-all text-xs xs:text-sm sm:text-base w-full xs:w-auto">
                  Source Code
                </button>
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT SIDE - Project Mockups Grid */}
          <div className="relative">
            {/* Mobile: Horizontal Scroll Carousel */}
            <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4 -mx-3 px-3">
              <div className="flex gap-4" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                {currentProject.mockups.map((mockup, index) => (
                  <div key={index} className="flex-shrink-0 w-72 xs:w-80" style={{ scrollSnapAlign: 'start' }}>
                    <TiltCard className="image-card bg-bg-secondary overflow-hidden rounded-xl">
                      {/* Mockup Placeholder */}
                      <div className={`w-full h-44 bg-gradient-to-br ${mockup.color} flex items-center justify-center relative group p-4`}>
                        <div className="text-center text-white">
                          <motion.div className="text-3xl mb-2" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>🖼️</motion.div>
                          <p className="text-sm font-semibold opacity-90 leading-tight mb-1">{mockup.title}</p>
                          <p className="text-xs opacity-75 leading-tight line-clamp-2">{mockup.description}</p>
                        </div>
                        {/* Browser Window Frame Effect */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-white bg-opacity-20 flex items-center px-3 gap-2">
                          <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                          <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                          <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">View Details →</span>
                        </div>
                      </div>
                      {/* Project Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-text-primary mb-1 text-sm">{mockup.title}</h3>
                        <p className="text-xs text-text-secondary leading-relaxed">{mockup.description}</p>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6">
              {currentProject.mockups.map((mockup, index) => (
                <ParallaxElement key={index} speed={0.02 * (index + 1)} className="w-full">
                  <TiltCard className="image-card bg-bg-secondary overflow-hidden rounded-xl">
                    {/* Mockup Placeholder */}
                    <div className={`w-full h-56 bg-gradient-to-br ${mockup.color} flex items-center justify-center relative group p-4`}>
                      <div className="text-center text-white">
                        <motion.div className="text-4xl mb-2" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>🖼️</motion.div>
                        <p className="text-base font-semibold opacity-90 leading-tight mb-1">{mockup.title}</p>
                        <p className="text-sm opacity-75 leading-tight line-clamp-2">{mockup.description}</p>
                      </div>
                      {/* Browser Window Frame Effect */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-white bg-opacity-20 flex items-center px-3 gap-2">
                        <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                        <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                        <div className="w-3 h-3 rounded-full bg-white bg-opacity-60"></div>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">View Details →</span>
                      </div>
                    </div>
                    {/* Project Info */}
                    <div className="p-5">
                      <h3 className="font-bold text-text-primary mb-1 text-base">{mockup.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{mockup.description}</p>
                    </div>
                  </TiltCard>
                </ParallaxElement>
              ))}
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
