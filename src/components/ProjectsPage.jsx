import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudiesData';

export default function ProjectsPage({ setPage, setCaseStudyId }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Management System', 'E-commerce', 'Web App'];

  const projectList = Object.values(caseStudies);

  // Filter categories helper
  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Management System') {
      return project.category.includes('Management') || project.category.includes('WMS') || project.category.includes('Administration') || project.category.includes('Dashboard') || project.category.includes('SaaS');
    }
    if (activeFilter === 'E-commerce') {
      return project.category.includes('E-Commerce') || project.category.includes('E-commerce') || project.category.includes('Clothing');
    }
    if (activeFilter === 'Web App') {
      return project.category.includes('Web App') || project.category.includes('Portal') || project.category.includes('Reservation') || project.category.includes('Exhibition');
    }
    return true;
  });

  const handleSelectProject = (id) => {
    setCaseStudyId(id);
    setPage('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-left space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-black text-text-primary leading-tight">
          Featured <span className="text-accent gradient-text">Projects</span>
        </h1>
        <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
          A selection of my recent works ranging from complex management dashboards to elegant e-commerce applications and interactive web solutions. Each project reflects my commitment to clean code, solid architectures, and user-centric designs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-border pb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-accent text-white shadow-md'
                : 'bg-bg-secondary text-text-muted hover:text-accent border border-border'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 'layout' is removed from grid to prevent reflow loops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-bg-secondary border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Browser mockup frame */}
              <div className="relative aspect-[16/10] bg-slate-50 border-b border-border overflow-hidden">
                <img 
                  src={project.featuredImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                {/* Browser dots */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent flex items-center px-3 gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Card info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-accent-soft text-accent text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-text-primary group-hover:text-accent transition-colors leading-tight">
                    {project.title.split('—')[0]}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.vision}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech.name} className="px-2 py-0.5 bg-bg-primary border border-border text-text-muted text-xxs sm:text-xs rounded-md">
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectProject(project.id)}
                    className="text-accent font-bold hover:text-accent-dark transition-colors inline-flex items-center gap-1.5 text-xs sm:text-sm flex-shrink-0 group"
                  >
                    View Case Study <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
