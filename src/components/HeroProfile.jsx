import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import TypingAnimation from './TypingAnimation';
import MagneticButton from './MagneticButton';
import { ParallaxBackground, ParallaxElement } from './ParallaxScroll';

const funFacts = [
  "👋 Anda menemukan Easter Egg! Yuk, scroll ke bawah untuk melihat hasil kerja saya.",
  "🏃‍♂️ Rutin lari jarak jauh. Stamina dan fokus saya selalu siap untuk mengejar deadline proyek.",
  "🎸 Merekam mashup vokal dan mendengarkan musik indie-rock adalah cara andalan saya me-recharge kreativitas.",
  "⚽ Saya melatih logical thinking lewat analisis taktik di game manajerial sepak bola.",
  "📚 Hobi menyusun world-building fiksi sangat membantu saya dalam merancang arsitektur kode yang rapi.",
  "🔥 Sukses membangun E-Commerce UMKM dari nol membuat saya adaptif dan terbiasa berorientasi pada solusi.",
];

const Confetti = ({ particles }) => {
  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: particle.color, left: '50%', top: '50%' }}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0.5],
            x: particle.x,
            y: particle.y,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </>
  );
};

const HeroProfile = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [particles, setParticles] = useState([]);
  const [funFact, setFunFact] = useState('');

  const handlePhotoClick = () => {
    const colors = ['#f59e0b', '#fbbf24', '#f97316', '#fb923c', '#fde047'];
    const newParticles = Array.from({ length: 20 }, () => ({
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
    setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    setShowEasterEgg(true);

    setTimeout(() => setShowEasterEgg(false), 3000);
  };
  const skills = [
    { name: 'Laravel', icon: '🔴' },
    { name: 'PHP', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Vite', icon: '⚡' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Midtrans', icon: '💳' },
    { name: 'Git', icon: '📦' },
    { name: 'Composer', icon: '🎵' },
    { name: 'Axios', icon: '🌐' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Font Awesome', icon: '⭐' },
    { name: 'CSS Grid', icon: '📐' },
    { name: 'CSS Animations', icon: '✨' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Dart', icon: '🎯' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Figma', icon: '✏️' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Bootstrap 5', icon: '🅱️' },
    { name: 'RFID Technology', icon: '📡' },
    { name: 'WMS', icon: '📦' },
  ];

  const experiences = [
    {
      role: 'Web Developer',
      company: 'Freelance / Personal Project',
      period: '2025',
      description: 'Building e-commerce platform AKRAB using Laravel and Tailwind CSS for UMKM Banyuwangi.',
    },
    {
      role: 'Backend Developer',
      company: 'Team Project - TaniTalk V2',
      period: '2023',
      description: 'Developed TaniTalk V2 - agricultural information system using vanilla PHP and MySQL for farmers community.',
    },
    {
      role: 'Frontend Developer',
      company: 'Academic Project - Zumb Restaurant',
      period: '2022',
      description: 'Built Zumb Restaurant website with table booking system, food menu grid, and shopping cart using advanced CSS Grid and animations.',
    },
    {
      role: 'Frontend Developer',
      company: 'Academic Project - IMK Clothing Store',
      period: '2021',
      description: 'Built clothing e-commerce frontend from scratch using vanilla HTML, CSS, JavaScript, and Font Awesome icons.',
    },
    {
      role: 'Mobile Developer',
      company: 'Personal Project - GASS_IN',
      period: '2024',
      description: 'Developed cross-platform mobile application using Flutter and Firebase with authentication, real-time database, Google Maps integration, and custom UI/UX design.',
    },
    {
      role: 'Frontend Developer',
      company: 'Team Project - Kampus Merdeka Vending Machine Dashboard',
      period: '2024',
      description: 'Built interactive analytics dashboard for vending machine monitoring with real-time metrics, data filtering, theme customization, and responsive design using vanilla HTML, CSS, and JavaScript.',
    },
    {
      role: 'UI/UX Specialist',
      company: 'Internship - PT Stechoq Robotika Indonesia',
      period: '2023',
      description: 'Designed mobile application for warehouse management system (WMS) using Figma, implementing barcode scanning, real-time stock monitoring, FIFO inventory method, and RFID integration for manufacturing industry.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-3 py-4 xs:p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Parallax Decorative Elements */}
      <ParallaxBackground
        elements={[
          {
            speed: 0.1,
            className: 'w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-accent/10 to-accent-light/5 blur-3xl',
            style: { top: '10%', left: '5%' },
          },
          {
            speed: 0.2,
            className: 'w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-accent-light/10 to-accent/5 blur-3xl',
            style: { top: '60%', right: '10%' },
          },
          {
            speed: 0.15,
            className: 'w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent/15 to-accent-dark/10 blur-3xl',
            style: { top: '30%', right: '20%' },
          },
        ]}
      />

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start md:items-start py-4 xs:py-6 sm:py-8 relative z-10">
        {/* LEFT SIDE - Profile & Contact */}
        <motion.div
          className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 max-w-xs xs:max-w-sm sm:max-w-md mx-auto md:max-w-none w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Profile Photo - Sticky */}
          <div className="md:sticky md:top-4">
            <ParallaxElement speed={0.05} className="relative">
            <div className="relative">
              <div
                className="blob-shape w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto overflow-hidden shadow-xl border-2 xs:border-4 border-accent cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center"
                onClick={handlePhotoClick}
                role="button"
                aria-label="Click for a fun surprise!"
              >
                <img
                  src="./profile-photo.jpeg"
                  alt="Yudistira Dwi Anggara"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-6xl md:text-7xl">👤</span>';
                  }}
                />
              </div>

            {/* Easter Egg: Confetti + Fun Fact */}
            <AnimatePresence>
              {showEasterEgg && (
                <motion.div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 sm:w-72"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Confetti particles */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0 h-0">
                      <Confetti particles={particles} />
                    </div>
                    {/* Fun fact popup */}
                    <div className="bg-accent text-white text-xs sm:text-sm font-medium p-3 rounded-xl shadow-lg text-center">
                      {funFact}
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-accent"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </ParallaxElement>
          </div>

          {/* QR Code & Contact Info - Non-sticky, scrolls normally */}
          <div className="bg-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-border">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* QR Code - Larger */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white rounded-xl overflow-hidden border-4 border-accent shadow-lg">
                  <img
                    src="./qr-code.png"
                    alt="QR Code"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full bg-gradient-to-br from-accent/10 to-accent-light/10"><span class="text-4xl md:text-5xl">📱</span></div>';
                    }}
                  />
                </div>
                <p className="text-xs text-text-muted mt-2 text-center">Scan to connect</p>
              </div>

              {/* Contact Details - More Prominent */}
              <div className="w-full space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary text-center">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:dwianggara1412@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-bg-primary hover:bg-accent/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <FaEnvelope className="text-accent text-lg" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors break-all">dwianggara1412@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/yudistira-dwi-anggara-a42a85220/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-bg-primary hover:bg-accent/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <FaLinkedin className="text-accent text-lg" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">LinkedIn Profile</span>
                  </a>
                  <a href="https://github.com/Yudisss1412/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-bg-primary hover:bg-accent/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <FaGithub className="text-accent text-lg" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">GitHub Profile</span>
                  </a>
                </div>

                {/* Download CV Button - More Prominent */}
                <MagneticButton className="w-full">
                  <a
                    href="./CV Yudistira Dwi Anggara.pdf"
                    download
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 glow text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Intro & Details */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Greeting */}
          <div>
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-1 xs:mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-accent">"</span>HELLO.<span className="text-accent">"</span>
            </motion.h1>
            
            {/* Typing Animation */}
            <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-text-secondary mb-2 xs:mb-3 sm:mb-4 h-6 xs:h-7 sm:h-8">
              I'm a <TypingAnimation 
                texts={['Web Developer', 'Laravel Developer', 'React Enthusiast', 'UI/UX Designer']}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
              />
            </div>
            
            <motion.p 
              className="text-xs xs:text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Web Developer yang berdedikasi dengan rekam jejak dalam membangun aplikasi web fungsional dari konsep hingga implementasi.
            </motion.p>
          </div>

          {/* Education */}
          <div className="bg-bg-secondary rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-border-light">
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-text-primary mb-2 xs:mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent rounded-full flex-shrink-0"></span>
              Education
            </h2>
            <p className="text-text-secondary leading-relaxed text-xs xs:text-sm sm:text-base">
              <strong className="text-text-primary">S1 Fakultas Ilmu Komputer</strong><br />
              Universitas Jember<br />
              <span className="text-xs">Focus on Software Engineering & Web Development</span>
            </p>
          </div>

          {/* Software Skills */}
          <div>
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-text-primary mb-2 xs:mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent rounded-full flex-shrink-0"></span>
              Software Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-bg-secondary px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-md xs:rounded-lg sm:rounded-xl border border-border hover:border-accent hover:shadow-lg hover:glow transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <span className="text-sm xs:text-base sm:text-xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Working Experience */}
          <div>
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-text-primary mb-2 xs:mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent rounded-full flex-shrink-0"></span>
              Working Experience
            </h2>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-bg-secondary rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 border border-border-light hover:border-accent hover:shadow-md transition-all"
                >
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1.5 xs:gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-text-primary text-xs xs:text-sm sm:text-base">{exp.role}</h3>
                      <p className="text-accent font-semibold text-xs">{exp.company}</p>
                    </div>
                    <span className="text-xs text-text-muted bg-accent-soft px-2 xs:px-3 py-1 rounded-full font-medium self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroProfile;
