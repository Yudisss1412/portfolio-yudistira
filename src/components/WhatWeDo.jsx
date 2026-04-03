import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  'Industrial and Civil Building',
  'Roads and Bridges',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Water Supply and Drainage',
  'Architectural Design',
  'Project Management',
  'Structural Analysis',
  'Environmental Engineering',
];

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="wedo" className="relative bg-dark-secondary py-32 px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(250,204,21,0.5) 35px, rgba(250,204,21,0.5) 36px)',
      }}></div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT SIDE - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-1">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex items-center gap-4 py-3 px-4 rounded-sm cursor-pointer transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-accent/10 translate-x-2'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <span className={`text-sm font-mono transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-accent' : 'text-gray-dim'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-white' : 'text-gray-text'
                  }`}>
                    - {service}
                  </span>
                  {hoveredIndex === index && (
                    <motion.svg
                      layoutId="arrow"
                      className="w-4 h-4 text-accent ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SIDE - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gray-dim text-sm font-medium tracking-widest mb-6 block">
              Since 2010
            </span>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-accent tracking-tighter leading-[0.85] mb-8">
              What
              <br />
              We Do
            </h2>

            <div className="w-16 h-1 bg-accent mb-8"></div>

            <p className="text-gray-text text-lg leading-relaxed max-w-md">
              We provide comprehensive engineering and construction services, 
              delivering excellence in every project from concept to completion 
              with innovative solutions and sustainable practices.
            </p>

            <motion.a
              href="#details"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-2 mt-8 text-accent font-medium tracking-wider group w-fit"
            >
              <span className="border-b border-accent pb-1">Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
