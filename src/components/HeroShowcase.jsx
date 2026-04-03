import { motion } from 'framer-motion';

export default function HeroShowcase() {
  return (
    <section id="projects" className="relative min-h-screen bg-overlay flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark-tertiary">
        {/* Replace with actual image: <img src="/your-bg.jpg" alt="" className="w-full h-full object-cover" /> */}
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical Yellow Line Decoration */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent hidden lg:block"></div>
            
            {/* Project Number */}
            <div className="flex items-end gap-2 mb-6">
              <span className="text-8xl md:text-9xl font-black text-accent leading-none tracking-tighter">
                02
              </span>
              <span className="text-3xl font-bold text-gray-dim mb-4">/ 08</span>
            </div>

            {/* Project Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-accent tracking-tight leading-[0.9] mb-8">
              Web
              <br />
              Developer
            </h1>

            {/* About Project Button */}
            <motion.a
              href="#details"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-3 text-white font-medium tracking-wider group"
            >
              <span className="border-b border-accent pb-1 group-hover:text-accent transition-colors">
                About Project
              </span>
              <motion.svg
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE - Overlapping Elements */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Yellow Vertical Box */}
            <div className="absolute left-12 top-12 w-20 h-full bg-accent rounded-sm flex flex-col justify-between p-4 z-10">
              <span className="text-dark text-3xl font-black">03</span>
              <svg className="w-6 h-6 text-dark mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Image Placeholder Box - Overlapping */}
            <div className="absolute left-32 top-24 w-72 h-[420px] bg-gray-border rounded-sm overflow-hidden border border-gray-700 z-20">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Small Decorative Box */}
            <div className="absolute right-12 bottom-24 w-24 h-24 bg-dark-tertiary border border-gray-border rounded-sm z-30 flex items-center justify-center">
              <span className="text-accent text-xs font-bold tracking-widest">VIEW<br/>MORE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
