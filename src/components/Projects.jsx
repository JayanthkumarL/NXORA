import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Farm Management Dashboard',
    category: 'Web App',
    tags: ['React', 'Vercel', 'Frontend','Backend'],
    description: 'A comprehensive frontend interface for farm management and operations.',
    initials: 'FM',
    gradient: 'from-accent/30 to-accent/10',
    link: 'https://farm-management-frontend-virid.vercel.app/#'
  },
  {
    id: 2,
    name: 'Freelancing Platform',
    category: 'Web App',
    tags: ['React', 'Vercel', 'Frontend','Backend'],
    description: 'A dedicated platform connecting freelancers with clients for professional services.',
    initials: 'FP',
    gradient: 'from-primary/20 to-accent/10',
    link: 'https://freelancingplat.vercel.app'
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-textSecondary text-lg max-w-2xl">A selection of our recent work for ambitious brands.</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium pb-2 group">
          View All Work <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group rounded-3xl overflow-hidden bg-surface transition-all duration-500 hover:shadow-[0_12px_40px_rgba(29,61,20,0.08)] hover:-translate-y-1 ${
              index === 2 ? 'md:col-span-2' : ''
            }`}
          >
            <a href={project.link} target={project.link !== '#' ? "_blank" : undefined} rel="noopener noreferrer" className="relative w-full h-full p-6 md:p-8 flex flex-col cursor-pointer block text-left">
              {/* Image placeholder */}
              <div className={`w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-500`}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                  <span className="text-4xl md:text-5xl font-display font-bold text-primary">{project.initials}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-6 md:inset-8 rounded-2xl bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-6 py-3 rounded-full bg-white text-primary font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project <span>→</span>
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 bg-white rounded-full border border-border/50 text-textSecondary">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{project.name}</h3>
              <p className="text-textSecondary leading-relaxed">{project.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
