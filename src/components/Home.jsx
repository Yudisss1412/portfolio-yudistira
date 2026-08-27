import { motion } from 'framer-motion';
import { FaLaravel, FaPhp, FaCss3Alt, FaDatabase, FaGitAlt, FaJsSquare, FaEnvelope, FaLinkedin, FaLaptopCode, FaFilm } from 'react-icons/fa';

export default function Home({ setPage, setCaseStudyId, setProjectMode }) {
  const handleViewAkrab = () => {
    setCaseStudyId("akrab");
    setPage("case-study");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSeeWork = () => {
    setPage("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
        {/* Left text */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent text-xs xs:text-sm font-bold border border-accent/15">
            🚀 Welcome to my Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-primary leading-tight">
            Hi, I'm <span className="text-accent gradient-text">Yudistira</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            A Web Developer based in Indonesia. Passionate about building high-quality, performant digital solutions with Laravel, PHP, and modern frontend frameworks.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/CV Yudistira Dwi Anggara.pdf"
              download
              className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-block text-center text-sm sm:text-base"
            >
              Download CV
            </a>
            <button
              onClick={handleSeeWork}
              className="bg-transparent hover:bg-bg-secondary text-accent font-bold px-6 py-3.5 rounded-xl border-2 border-accent hover:border-accent-dark transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              See My Work →
            </button>
          </div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative Background Shape */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          {/* Main Photo Frame */}
          <div className="relative group overflow-hidden rounded-3xl border-4 border-white dark:border-bg-secondary shadow-2xl max-w-[320px] sm:max-w-[360px] aspect-square">
            <img
              src="./profile-photo.jpeg"
              alt="Yudistira"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. CHOOSE YOUR JOURNEY SECTION */}
      <section id="projects-home" className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary">Areas of Expertise</h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Explore my portfolio based on the creative and technical solutions you are looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Web Development Card */}
          <motion.div
            onClick={() => {
              if (setProjectMode) setProjectMode('web');
              handleSeeWork();
            }}
            className="relative group cursor-pointer rounded-[2rem] overflow-hidden bg-bg-secondary border border-border shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/3] sm:aspect-square md:aspect-[4/3] flex flex-col items-center justify-center text-center p-8"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-bg-primary border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent-soft transition-colors duration-500 shadow-sm">
                <FaLaptopCode className="text-4xl sm:text-5xl text-text-muted group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
                Web Development
              </h3>
            </div>

            {/* Subtle View Text */}
            <div className="absolute bottom-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm font-bold text-accent flex items-center gap-2">
              Explore Web Projects <span>→</span>
            </div>
          </motion.div>

          {/* Video Editing Card */}
          <motion.div
            onClick={() => {
              if (setProjectMode) setProjectMode('video');
              handleSeeWork();
            }}
            className="relative group cursor-pointer rounded-[2rem] overflow-hidden bg-bg-secondary border border-border shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/3] sm:aspect-square md:aspect-[4/3] flex flex-col items-center justify-center text-center p-8"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-bg-primary border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent-soft transition-colors duration-500 shadow-sm">
                <FaFilm className="text-4xl sm:text-5xl text-text-muted group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
                Video Editing
              </h3>
            </div>

            {/* Subtle View Text */}
            <div className="absolute bottom-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm font-bold text-accent flex items-center gap-2">
              Explore Video Projects <span>→</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TECHNICAL ARSENAL SECTION */}
      <section id="skills" className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Left side info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-text-primary">Technical Arsenal</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Technologies I use to build standards-compliant, secure, and scalable digital products. My workflows prioritize performance and clean structures.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3.5 bg-accent-soft text-accent rounded-2xl border border-accent/10">
                💾
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-primary text-base sm:text-lg">Backend Systems</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Designing secure databases, developing business login logic, and structured MVC controllers with Laravel and core PHP.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3.5 bg-accent-soft text-accent rounded-2xl border border-accent/10">
                🌐
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text-primary text-base sm:text-lg">Frontend Development</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Building responsive pages, modal interfaces, and dynamic components utilizing CSS Grid, Flexbox, Tailwind, and React.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side skills cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { name: 'PHP', icon: <FaPhp className="text-3xl text-[#4f5b93]" /> },
            { name: 'Laravel', icon: <FaLaravel className="text-3xl text-[#ff2d20]" /> },
            { name: 'Tailwind', icon: <FaCss3Alt className="text-3xl text-[#38bdf8]" /> },
            { name: 'MySQL', icon: <FaDatabase className="text-3xl text-[#00758f]" /> },
            { name: 'Git', icon: <FaGitAlt className="text-3xl text-[#f05032]" /> },
            { name: 'JavaScript', icon: <FaJsSquare className="text-3xl text-[#f7df1e]" /> },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-bg-secondary border border-border hover:border-accent hover:shadow-md rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
              <span className="font-bold text-xs sm:text-sm text-text-primary">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CONTACT / LET'S TALK SECTION */}
      <section id="contact" className="bg-bg-secondary border border-border rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary">Let's build something together!</h2>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          I'm open to industrial partnerships, freelance opportunities, or full-time roles. If you have a project in mind or want to collaborate, feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dwianggara1412@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // placeholders updated by data
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-bg-primary text-text-primary border-2 border-border hover:border-accent font-bold px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
