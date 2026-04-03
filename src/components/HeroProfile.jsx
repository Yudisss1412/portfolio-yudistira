import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
    { name: 'React', icon: '⚛️' },
    { name: 'Laravel', icon: '🔺' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Git', icon: '📦' },
    { name: 'VS Code', icon: '💻' },
  ];

  const experiences = [
    {
      role: 'Web Developer',
      company: 'Freelance / Personal Project',
      period: '2024 - Present',
      description: 'Building e-commerce platform AKRAB using Laravel and React.js for UMKM Banyuwangi.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-3 sm:p-6 md:p-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start md:items-center py-8">
        {/* LEFT SIDE - Profile & Contact */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8 max-w-sm sm:max-w-md mx-auto md:max-w-none w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Profile Photo */}
          <div className="relative">
            <div
              className="blob-shape w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden shadow-xl border-4 border-accent cursor-pointer hover:scale-105 transition-transform duration-300"
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
                <a
                  href="./CV Yudistira Dwi Anggara.pdf"
                  download
                  className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Download CV</span>
                </a>
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-text-primary mb-2 sm:mb-4">
              <span className="text-accent">"</span>HELLO.<span className="text-accent">"</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
              Web Developer yang berdedikasi tinggi dengan rekam jejak dalam membangun aplikasi web fungsional dari tahap konsep hingga implementasi. Menguasai arsitektur pengembangan berbasis Laravel dan React.js, serta memiliki pengalaman merilis platform e-commerce terintegrasi. Siap memberikan kontribusi teknis yang solid di industri teknologi berskala besar.
            </p>
          </div>

          {/* Education */}
          <div className="bg-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border-light">
            <h2 className="text-base sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
              Education
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              <strong className="text-text-primary">S1 Fakultas Ilmu Komputer</strong><br />
              Universitas Jember<br />
              <span className="text-xs sm:text-sm">Focus on Software Engineering & Web Development</span>
            </p>
          </div>

          {/* Software Skills */}
          <div>
            <h2 className="text-base sm:text-xl font-bold text-text-primary mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
              Software Skills
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-bg-secondary px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-border hover:border-accent hover:shadow-md transition-all cursor-default"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-xl">{skill.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-text-primary whitespace-nowrap">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Experience */}
          <div>
            <h2 className="text-base sm:text-xl font-bold text-text-primary mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
              Working Experience
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-border-light hover:border-accent hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-text-primary text-sm sm:text-base">{exp.role}</h3>
                      <p className="text-accent font-semibold text-xs sm:text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-text-muted bg-accent-soft px-2 sm:px-3 py-1 rounded-full font-medium self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{exp.description}</p>
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
