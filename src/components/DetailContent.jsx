import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DetailContent() {
  const [activePage, setActivePage] = useState(3);
  const totalPages = 9;

  return (
    <section id="details" className="relative bg-dark py-32 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT SCROLL INDICATOR */}
          <div className="hidden lg:flex col-span-1 flex-col items-center justify-end relative">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="writing-mode-vertical text-gray-dim text-xs tracking-[0.3em] font-medium flex items-center gap-3"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              <span>scroll</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          {/* MAIN CONTENT (60-70%) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-8"
          >
            {/* Section Label */}
            <span className="text-gray-dim text-xs font-medium tracking-[0.3em] uppercase block mb-6">
              Project Details
            </span>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-accent tracking-tighter leading-[0.9] mb-8">
              Construction of
              <br />
              sports facilities
            </h2>

            {/* Horizontal Separator */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-text text-base md:text-lg leading-relaxed">
              <p>
                Our company specializes in the design and construction of world-class sports 
                facilities, including stadiums, aquatic centers, indoor arenas, and training 
                complexes. With over a decade of experience in the industry, we have successfully 
                delivered more than 150 projects across Southeast Asia, each tailored to meet 
                the unique requirements of our clients while maintaining the highest standards 
                of quality and safety.
              </p>
              <p>
                Every project begins with a comprehensive consultation process where we work 
                closely with architects, engineers, and stakeholders to develop a vision that 
                balances functionality, aesthetics, and budget. Our integrated approach ensures 
                seamless coordination from initial concept through final handover, minimizing 
                delays and maximizing value. We employ cutting-edge building technologies and 
                sustainable materials to create facilities that stand the test of time.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-border">
              {[
                { value: '150+', label: 'Projects Completed' },
                { value: '12', label: 'Years Experience' },
                { value: '8', label: 'Countries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</div>
                  <div className="text-gray-dim text-sm tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Vertical Pagination (10-20%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-2 lg:gap-0 lg:pt-32"
          >
            <nav className="flex lg:flex-col gap-2 lg:gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
                const isActive = num === activePage;
                return (
                  <button
                    key={num}
                    onClick={() => setActivePage(num)}
                    className={`relative group transition-all duration-300 ${
                      isActive ? 'text-accent' : 'text-gray-dim hover:text-gray-text'
                    }`}
                  >
                    <span className="text-lg md:text-xl font-mono font-bold tabular-nums">
                      {String(num).padStart(2, '0')}
                    </span>
                    
                    {/* Active Indicator - Yellow Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeLine"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-accent hidden lg:block"
                      />
                    )}
                    
                    {/* Hover Line (desktop only) */}
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-accent group-hover:w-3 transition-all duration-300 hidden lg:block"></span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
