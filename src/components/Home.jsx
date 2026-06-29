import { motion } from 'framer-motion';
import { FaLaravel, FaPhp, FaCss3Alt, FaDatabase, FaGitAlt, FaJsSquare, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Home({ setPage, setCaseStudyId }) {
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
              src="/profile-photo.jpeg" 
              alt="Yudistira" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. SELECTED PROJECTS SECTION */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary">Selected Projects</h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Featured works that demonstrate code quality, technical execution, and problem-solving.
          </p>
        </div>

        {/* Custom Mockups Grid Layout for Akrab */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Large Card (2 columns wide) */}
          <motion.div 
            className="lg:col-span-2 bg-bg-secondary border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all space-y-6"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-50 border border-border-light group">
              <img 
                src="/akrab-admin-dashboard.png" 
                alt="Akrab Admin Dashboard" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent flex items-center px-3 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-soft text-accent text-xs font-bold rounded-full">E-Commerce System</span>
                <span className="px-3 py-1 bg-bg-primary text-text-secondary text-xs font-semibold rounded-full border border-border">Laravel / PHP</span>
              </div>
              <h3 className="text-2xl font-black text-text-primary">Akrab - Local UMKM Hub</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A full-featured marketplace solution designed to digitize and empower micro, small, and medium enterprises (UMKMs). Includes deep routing, inventory management, dynamic invoicing, and a highly responsive design.
              </p>
              <button 
                onClick={handleViewAkrab}
                className="text-accent font-bold hover:text-accent-dark transition-colors inline-flex items-center gap-1.5 text-sm sm:text-base pt-2 group"
              >
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Stack Cards (1 column wide, holds 2 stacked mockups) */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Top Right Card: Normalized Analytics */}
            <motion.div 
              className="bg-bg-secondary border border-border rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all space-y-4"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-50 border border-border-light">
                <img 
                  src="/akrab-katalog-produk.png" 
                  alt="Katalog Produk" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-text-primary text-base sm:text-lg">Normalized Catalog Search</h4>
                <p className="text-text-muted text-xs sm:text-sm">
                  Responsive product catalog with optimized category filtering and search mechanics for seamless browsing.
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card: Better Inventory Control */}
            <motion.div 
              className="bg-bg-secondary border border-border rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all space-y-4"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-50 border border-border-light">
                <img 
                  src="/akrab-manajemen-inventaris.png" 
                  alt="Manajemen Inventaris" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-text-primary text-base sm:text-lg">Better Inventory Control</h4>
                <p className="text-text-muted text-xs sm:text-sm">
                  Real-time stock monitoring, category editing, and restock capabilities tailored for administrator ease.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lower Left Card: Optimized Shopping Experience */}
          <motion.div 
            className="bg-bg-secondary border border-border rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all space-y-4"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-50 border border-border-light">
              <img 
                src="/akrab-keranjang-belanja.png" 
                alt="Keranjang Belanja" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-text-primary text-lg">Optimized Shopping Experience</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                A highly dynamic shopping cart layout allowing users to update product quantities and view price adjustments on the fly.
              </p>
            </div>
          </motion.div>

          {/* Lower Right Card: Secure Multi-step Checkout */}
          <motion.div 
            className="bg-bg-secondary border border-border rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all space-y-4"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-50 border border-border-light">
              <img 
                src="/akrab-halaman-checkout.png" 
                alt="Halaman Checkout" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-text-primary text-lg">Secure Multi-step Checkout</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Structured transaction form detailing orders, delivery particulars, and integrated order summaries for secure processing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center pt-6">
          <button 
            onClick={handleSeeWork}
            className="bg-bg-secondary text-text-primary border border-border hover:border-accent hover:text-accent font-bold px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all inline-block"
          >
            View All Featured Projects
          </button>
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
            href="mailto:dwianggara1412@gmail.com"
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
