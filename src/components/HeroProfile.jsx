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
  ];

  const experiences = [
    {
      role: 'Web Developer',
      company: 'Freelance / Personal Project',
      period: '2024 - Present',
      description: 'Building e-commerce platform AKRAB using Laravel and Tailwind CSS for UMKM Banyuwangi.',
    },
    {
      role: 'Backend Developer',
      company: 'Team Project - TaniTalk V2',
      period: '2024',
      description: 'Developed TaniTalk V2 - agricultural information system using vanilla PHP and MySQL for farmers community.',
    },
    {
      role: 'Frontend Developer',
      company: 'Academic Project - Zumb Restaurant',
      period: '2024',
      description: 'Built Zumb Restaurant website with table booking system, food menu grid, and shopping cart using advanced CSS Grid and animations.',
    },
    {
      role: 'Frontend Developer',
      company: 'Academic Project - IMK Clothing Store',
      period: '2021',
      description: 'Built clothing e-commerce frontend from scratch using vanilla HTML, CSS, JavaScript, and Font Awesome icons.',
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

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start md:items-center py-4 xs:py-6 sm:py-8 relative z-10">
        {/* LEFT SIDE - Profile & Contact */}
        <motion.div
          className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 max-w-xs xs:max-w-sm sm:max-w-md mx-auto md:max-w-none w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Profile Photo */}
          <ParallaxElement speed={0.05} className="relative">
            <div className="relative">
              <div
                className="blob-shape w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto overflow-hidden shadow-xl border-2 xs:border-4 border-accent cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handlePhotoClick}
                role="button"
                aria-label="Click for a fun surprise!"
              >
                <img
                  src="./profile-photo.jpeg"
                  alt="Yudistira Dwi Anggara"
                  className="w-full h-full object-cover"
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

          {/* QR Code & Contact Info */}
          <div className="bg-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-border">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* QR Code */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden border-2 border-accent shadow-sm">
                  <img
                    src="./qr-code.png"
                    alt="QR Code"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex-1 space-y-2 sm:space-y-3 w-full">
                <h3 className="text-base sm:text-lg font-bold text-text-primary text-center sm:text-left">Get In Touch</h3>
                <div className="space-y-2">
                  <a href="mailto:dwianggara1412@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                    <FaEnvelope className="text-accent flex-shrink-0 text-sm" />
                    <span className="text-xs sm:text-sm break-all">dwianggara1412@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/yudistira-dwi-anggara-a42a85220/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                    <FaLinkedin className="text-accent flex-shrink-0 text-sm" />
                    <span className="text-xs sm:text-sm">linkedin.com/in/yudistira-dwi-anggara</span>
                  </a>
                  <a href="https://github.com/Yudisss1412/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                    <FaGithub className="text-accent flex-shrink-0 text-sm" />
                    <span className="text-xs sm:text-sm">github.com/Yudisss1412</span>
                  </a>
                </div>

                {/* Download CV Button */}
                <MagneticButton className="mt-3 sm:mt-4 w-full">
                  <a
                    href="./CV Yudistira Dwi Anggara.pdf"
                    download
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-light hover:to-accent text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 glow"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs sm:text-sm">Download CV</span>
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
