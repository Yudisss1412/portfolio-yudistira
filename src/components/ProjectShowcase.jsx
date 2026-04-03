import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      name: 'PROJECT_B',
      label: 'Project Placeholder',
      featured: 'ANOTHER PROJECT',
      title: 'PROJECT',
      titleAccent: 'PLACEHOLDER',
      description: 'Ini adalah project placeholder. Kamu bisa mengganti deskripsi ini dengan detail project kedua kamu nantinya.',
      highlights: [
        {
          title: 'Highlight 1:',
          desc: 'Deskripsi fitur atau highlight pertama dari project ini.',
        },
        {
          title: 'Highlight 2:',
          desc: 'Deskripsi fitur atau highlight kedua dari project ini.',
        },
        {
          title: 'Highlight 3:',
          desc: 'Deskripsi fitur atau highlight ketiga dari project ini.',
        },
        {
          title: 'Highlight 4:',
          desc: 'Deskripsi fitur atau highlight keempat dari project ini.',
        },
      ],
      technologies: [
        'Technology 1',
        'Technology 2',
        'Technology 3',
        'Technology 4',
        'Technology 5',
      ],
      mockups: [
        {
          title: 'Mockup 1',
          description: 'Deskripsi singkat mockup pertama.',
          color: 'from-blue-400 to-cyan-500',
        },
        {
          title: 'Mockup 2',
          description: 'Deskripsi singkat mockup kedua.',
          color: 'from-purple-400 to-pink-500',
        },
        {
          title: 'Mockup 3',
          description: 'Deskripsi singkat mockup ketiga.',
          color: 'from-green-400 to-emerald-500',
        },
        {
          title: 'Mockup 4',
          description: 'Deskripsi singkat mockup keempat.',
          color: 'from-red-400 to-rose-500',
        },
        {
          title: 'Mockup 5',
          description: 'Deskripsi singkat mockup kelima.',
          color: 'from-indigo-400 to-blue-500',
        },
      ],
    },
  ];

  const currentProject = projects[activeProject];

  return (
    <div className="h-screen bg-bg-primary flex flex-col relative overflow-hidden">
      {/* Yellow Shape Background Element */}
      <div className="yellow-shape" style={{ top: '5%', right: '10%' }}></div>
      <div className="yellow-shape" style={{ bottom: '10%', left: '5%', width: '300px', height: '300px' }}></div>

      {/* Project Tab Selector */}
      <div className="relative z-20 flex flex-wrap justify-center gap-2 sm:gap-4 pt-4 sm:pt-8 px-4">
        {projects.map((project, index) => (
          <button
            key={project.name}
            onClick={() => setActiveProject(index)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all ${
              activeProject === index
                ? 'bg-accent text-white shadow-lg scale-105'
                : 'bg-bg-secondary text-text-muted border border-border hover:border-accent hover:text-accent'
            }`}
          >
            {project.label}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <motion.div
        className="flex-1 overflow-y-auto relative z-10 p-4 sm:p-6 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        key={activeProject}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          {/* LEFT SIDE - Project Description */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-accent-soft text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
                ✨ {currentProject.featured}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4 sm:mb-6 leading-tight">
                {currentProject.title}
                <br />
                <span className="text-accent">{currentProject.titleAccent}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-6 border border-border-light shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-3">📋 Project Highlights</h3>
              <ul className="space-y-3 text-text-secondary">
                {currentProject.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✓</span>
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
              <h3 className="text-lg font-bold text-text-primary mb-4">🛠️ Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg-secondary px-4 py-2 rounded-xl border border-border text-sm font-semibold text-text-secondary hover:border-accent hover:text-accent hover:shadow-md transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-accent hover:bg-accent-light text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base">
                View Live Demo →
              </button>
              <button className="bg-bg-secondary hover:bg-border-light text-text-primary font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-border hover:border-accent transition-all text-sm sm:text-base">
                Source Code
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Project Mockups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {currentProject.mockups.map((mockup, index) => (
              <div
                key={index}
                className={`image-card bg-bg-secondary overflow-hidden ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Mockup Placeholder */}
                <div
                  className={`w-full ${
                    index === 0 ? 'h-48 sm:h-56' : 'h-36 sm:h-40'
                  } bg-gradient-to-br ${mockup.color} flex items-center justify-center relative`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm font-semibold opacity-90">{mockup.title}</p>
                    <p className="text-xs opacity-75 mt-1">{mockup.description}</p>
                  </div>
                  {/* Browser Window Frame Effect */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-white bg-opacity-20 flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white bg-opacity-60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white bg-opacity-60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white bg-opacity-60"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-bold text-text-primary mb-1">{mockup.title}</h3>
                  <p className="text-sm text-text-secondary">{mockup.description}</p>
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
