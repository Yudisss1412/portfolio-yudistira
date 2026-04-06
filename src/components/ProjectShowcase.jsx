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
          image: 'Screenshot (1895).png',
          color: 'from-blue-400 to-purple-500',
        },
        {
          title: 'Login Modal',
          description: 'Form login dengan animasi dan SVG graphics.',
          image: 'Screenshot (1896).png',
          color: 'from-purple-400 to-pink-500',
        },
        {
          title: 'Product Detail - Eiger Bucket Hat',
          description: 'Halaman produk Eiger Bucket Hat Outdoor 1989.',
          image: 'Screenshot (1897).png',
          color: 'from-pink-400 to-rose-500',
        },
        {
          title: 'Product Detail - Kamikaze Jacket',
          description: 'Halaman produk Kamikaze Badminton Club Varsity Jacket.',
          image: 'Screenshot (1898).png',
          color: 'from-rose-400 to-red-500',
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
          image: '/portfolio-yudistira/zumb-homepage-booking.png',
          color: 'from-yellow-400 to-orange-500',
        },
        {
          title: 'Food Menu Grid',
          description: 'Menu items dengan harga dan status ketersediaan.',
          image: '/portfolio-yudistira/zumb-food-menu.png',
          color: 'from-orange-400 to-red-500',
        },
        {
          title: 'Shopping Cart',
          description: 'Cart dengan quantity input dan perhitungan otomatis.',
          image: '/portfolio-yudistira/zumb-shopping-cart.png',
          color: 'from-red-400 to-pink-500',
        },
        {
          title: 'Payment Method',
          description: 'Pilihan metode pembayaran: Tunai, E-Money, Kredit/Debit.',
          image: '/portfolio-yudistira/zumb-payment-method.png',
          color: 'from-pink-400 to-purple-500',
        },
        {
          title: 'Rating & Review',
          description: 'Sistem rating restoran dan review dari pelanggan.',
          image: '/portfolio-yudistira/zumb-rating-review.png',
          color: 'from-purple-400 to-indigo-500',
        },
      ],
    },
    {
      name: 'GASS_IN',
      label: 'GASS_IN Mobile App',
      featured: 'PERSONAL PROJECT',
      title: 'MOBILE',
      titleAccent: 'GASS_IN',
      description: 'Aplikasi mobile cross-platform yang dikembangkan menggunakan Flutter dan Firebase. Menampilkan integrasi lengkap dengan Firebase Authentication, Cloud Firestore untuk real-time data, Google Maps untuk fitur lokasi, serta custom UI/UX design dengan branding yang konsisten.',
      highlights: [
        {
          title: 'Firebase Authentication & Firestore:',
          desc: 'Sistem autentikasi user yang aman dan database real-time untuk sinkronisasi data across devices.',
        },
        {
          title: 'Google Maps Integration:',
          desc: 'Integrasi Google Maps dengan Places autocomplete untuk fitur lokasi dan navigasi yang intuitif.',
        },
        {
          title: 'State Management with Provider:',
          desc: 'Implementasi Provider pattern untuk state management yang clean dan maintainable.',
        },
        {
          title: 'Custom UI & Branding:',
          desc: 'Desain UI dengan custom fonts (TT Norm Pro), icons, dan assets untuk branding yang konsisten.',
        },
      ],
      technologies: [
        'Flutter (Cross-platform Framework)',
        'Dart (Programming Language)',
        'Firebase Auth & Firestore',
        'Google Maps Flutter',
        'Provider (State Management)',
        'Dio (HTTP Client)',
      ],
      mockups: [
        {
          title: 'Authentication Screen',
          description: 'Login & register dengan Firebase Auth.',
          color: 'from-blue-400 to-cyan-500',
        },
        {
          title: 'Home Dashboard',
          description: 'Main dashboard dengan navigasi dan konten utama.',
          color: 'from-cyan-400 to-teal-500',
        },
        {
          title: 'Maps & Location',
          description: 'Google Maps integration dengan Places search.',
          color: 'from-teal-400 to-green-500',
        },
        {
          title: 'Image Picker Feature',
          description: 'Upload gambar dari camera atau gallery.',
          color: 'from-green-400 to-emerald-500',
        },
        {
          title: 'Custom UI Components',
          description: 'Branded UI dengan custom fonts dan icons.',
          color: 'from-emerald-400 to-green-600',
        },
      ],
    },
    {
      name: 'KAMPUS_MERDEKA',
      label: 'KM Vending Machine Dashboard',
      featured: 'KAMPUS MERDEKA PROGRAM',
      title: 'VENDING MACHINE',
      titleAccent: 'DASHBOARD',
      description: 'Dashboard analytics dan monitoring untuk manajemen vending machine multi-lokasi. Menampilkan performa penjualan, tracking inventory, filter data real-time, serta fitur kustomisasi tema dan responsive preview. Dibangun menggunakan vanilla HTML, CSS, dan JavaScript dengan local JSON data source.',
      highlights: [
        {
          title: 'Performance Metrics Dashboard:',
          desc: 'Real-time display dari Total Products, Total Sales, Transactions, dan Revenue untuk multiple vending machines.',
        },
        {
          title: 'Advanced Data Filtering:',
          desc: 'Multi-level filtering by Location, Machine ID, dan Product Category (Carbonated, Food, Non-carbonated, Water).',
        },
        {
          title: 'Activity Trends Visualization:',
          desc: 'Weekly dan Monthly view toggle untuk visualisasi trend penjualan dan aktivitas vending machines.',
        },
        {
          title: 'Theme Customization & Responsive Preview:',
          desc: 'Device layout toggler (Phone/Tablet/PC) dan background/theme personalization untuk testing responsive design.',
        },
      ],
      technologies: [
        'HTML5 (Semantic structure)',
        'CSS3 (Responsive design & theming)',
        'Vanilla JavaScript (DOM manipulation)',
        'JSON (Data source)',
        'Local Storage (User preferences)',
      ],
      mockups: [
        {
          title: 'Dashboard Analytics',
          description: 'Main dashboard dengan metrics dan KPIs.',
          color: 'from-purple-400 to-indigo-500',
        },
        {
          title: 'Monitoring Data',
          description: 'Real-time tracking vending machines per lokasi.',
          color: 'from-indigo-400 to-blue-500',
        },
        {
          title: 'Product Analytics',
          description: 'Top 5 products table dengan quantity sold.',
          color: 'from-blue-400 to-cyan-500',
        },
        {
          title: 'Activity Trends',
          description: 'Weekly/Monthly activity visualization.',
          color: 'from-cyan-400 to-teal-500',
        },
        {
          title: 'Settings & Customization',
          description: 'Theme selector dan device preview toggler.',
          color: 'from-teal-400 to-green-500',
        },
      ],
    },
    {
      name: 'ZONEINSTICNT_WMS',
      label: 'Zoneinsticnt Warehouse Apps',
      featured: 'INTERNSHIP PROJECT',
      title: 'WAREHOUSE MANAGEMENT',
      titleAccent: 'SYSTEM',
      description: 'Aplikasi mobile untuk manajemen gudang (Warehouse Management System) di industri manufaktur sepatu. Menampilkan fitur pemindaian barcode, pemantauan stok real-time, tracking pengiriman, dan integrasi RFID untuk efisiensi pengelolaan inventaris dengan metode FIFO (First In First Out).',
      highlights: [
        {
          title: 'Barcode Scanning & RFID Integration:',
          desc: 'Pemindaian barcode dan integrasi RFID untuk pelacakan item yang efisien dan manajemen inventaris otomatis.',
        },
        {
          title: 'Real-time Stock Monitoring:',
          desc: 'Pemantauan level stok gudang dan lokasi produk secara real-time untuk akurasi data inventaris.',
        },
        {
          title: 'Order Shipping Tracking:',
          desc: 'Tracking status pengiriman dan pembaruan delivery secara real-time untuk logistik yang transparan.',
        },
        {
          title: 'FIFO Inventory Method:',
          desc: 'Implementasi metode First In First Out untuk optimasi rotasi stok dan analisis kapasitas gudang.',
        },
      ],
      technologies: [
        'Figma (UI/UX Design & Prototyping)',
        'UI/UX Research & Design System',
        'HTML/CSS/JavaScript (Basic Web)',
        'Bootstrap 5 (Responsive Layout)',
        'Local JSON (Data Source)',
      ],
      mockups: [
        {
          title: 'Dashboard Overview',
          description: 'Main dashboard dengan metrics inventaris gudang.',
          color: 'from-orange-400 to-red-500',
        },
        {
          title: 'Barcode Scanner',
          description: 'Interface pemindai barcode untuk lookup item cepat.',
          color: 'from-red-400 to-pink-500',
        },
        {
          title: 'Stock Monitoring',
          description: 'Level stok real-time dan tracking lokasi produk.',
          color: 'from-pink-400 to-rose-500',
        },
        {
          title: 'Order Shipping',
          description: 'Tracking pengiriman dan status delivery.',
          color: 'from-rose-400 to-orange-500',
        },
        {
          title: 'Inventory Management',
          description: 'Implementasi metode FIFO dan analisis kapasitas.',
          color: 'from-orange-500 to-red-600',
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
          <div className="grid grid-cols-1 gap-6">
            {currentProject.mockups.map((mockup, index) => (
              <TiltCard key={index} className="image-card bg-bg-secondary overflow-hidden rounded-xl">
                  {mockup.image ? (
                    <>
                      {/* Real Screenshot Image */}
                      <div className="w-full relative group overflow-hidden rounded-t-xl">
                        <img
                          src={mockup.image}
                          alt={mockup.title}
                          className="w-full h-auto max-h-[350px] object-contain bg-white block"
                          loading="eager"
                          onError={(e) => { console.error('Failed to load:', mockup.image); e.target.style.display='none'; }}
                        />
                        {/* Browser Window Frame Effect */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/50 to-transparent flex items-center px-3 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">View Details →</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Mockup Placeholder */}
                      <div className={`w-full h-48 xs:h-56 bg-gradient-to-br ${mockup.color} flex items-center justify-center relative group p-6`}>
                        <div className="text-center text-white">
                          <motion.div className="text-4xl xs:text-5xl mb-3" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>🖼️</motion.div>
                          <p className="text-base xs:text-lg font-semibold opacity-90 leading-tight mb-2">{mockup.title}</p>
                          <p className="text-sm xs:text-base opacity-75 leading-relaxed line-clamp-2">{mockup.description}</p>
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
                    </>
                  )}
                  {/* Project Info */}
                  <div className="p-5 xs:p-6">
                    <h3 className="font-bold text-text-primary mb-2 text-base xs:text-lg">{mockup.title}</h3>
                    <p className="text-sm xs:text-base text-text-secondary leading-relaxed">{mockup.description}</p>
                  </div>
                </TiltCard>
            ))}
          </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
