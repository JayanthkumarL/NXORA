import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
   {
    id: 6,
    name: 'Mahadeshwara Agro Nursery Garden',
    category: 'E-Commerce Catalog',
    tags: ['Next.js', 'Firebase', 'Netlify', 'WhatsApp API'],
    description: 'A full-stack e-commerce catalog for a plant nursery, featuring 120+ product listings across 6 categories with a zero-friction WhatsApp ordering flow — no cart, no checkout, just a direct line from browsing to order confirmation.',
    image: '/img/mahadeshwara-agro.png',
    link: 'https://mahadeshwaraagrofarm.in'
  },
  {
    id: 3,
    name: 'Karnataka Sports Foundation',
    category: 'Full-Service Platform',
    tags: ['React', 'Firebase', 'Netlify', 'Web App'],
    description: 'A high-performance digital hub for athlete registration and grassroots program management across 20+ districts.',
    image: '/img/sports-karnataka.png',
    link: 'https://sportskarnataka.com/'
  },
 
  {
    id: 4,
    name: 'Timeless Moments',
    category: 'Photography Portfolio',
    tags: ['React', 'Vercel', 'Tailwind', 'Creative', 'Smooth Scroll Animations'],
    description: 'A premium, modern wedding photography portfolio showcase designed to display high-resolution imagery and capture artistic milestones.',
    image: '/img/photography.png',
    link: 'https://photography-phi-nine.vercel.app/'
  },
  {
    id: 5,
    name: ' Gurukula',
    category: 'Early Learning Academy',
    tags: ['React', 'Netlify', 'Tailwind', 'Interactive', '3D Models','Smooth Scroll Animations'],
    description: 'An interactive digital portal for a premium activity and early learning centre designed for children, featuring program details and admissions.',
    image: '/img/playhomes.png',
    link: 'https://playhomes.netlify.app/'
  },
  {
    id: 1,
    name: 'Farm Management Dashboard',
    category: 'Web App',
    tags: ['React', 'Vercel', 'Frontend', 'Backend'],
    description: 'A comprehensive frontend interface for farm management and operations.',
    image: '/img/farm-management.png',
    link: 'https://farm-management-frontend-virid.vercel.app/#'
  },
  {
    id: 2,
    name: 'Freelancing Platform',
    category: 'Web App',
    tags: ['React', 'Vercel', 'Frontend', 'Backend'],
    description: 'A dedicated platform connecting freelancers with clients for professional services.',
    image: '/img/freelancing-platform.png',
    link: 'https://freelancingplat.vercel.app'
  }
];

const Projects = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const pages = [];
  for (let i = 0; i < projects.length; i += itemsPerPage) {
    pages.push(projects.slice(i, i + itemsPerPage));
  }

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
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
        
        {/* Navigation Arrows in Header */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevPage}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextPage}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Slider Container with absolute floating arrows on the left and right */}
      <div className="relative px-2 md:px-12">
        {/* Floating Left Arrow */}
        <button 
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-border/80 bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:-translate-x-1 hover:shadow-lg"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Floating Right Arrow */}
        <button 
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-border/80 bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:translate-x-1 hover:shadow-lg"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal Slider Area */}
        <div className="overflow-hidden w-full py-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((pageItems, pageIdx) => (
              <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                {pageItems.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-3xl overflow-hidden bg-card border border-border/40 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(29,61,20,0.08)] hover:-translate-y-1 h-full"
                  >
                    <a href={project.link} target={project.link !== '#' ? "_blank" : undefined} rel="noopener noreferrer" className="relative w-full h-full p-6 md:p-8 flex flex-col cursor-pointer block text-left">
                      {/* Project Screenshot */}
                      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 relative bg-surface">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-500" 
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-6 py-3 rounded-full bg-white text-primary font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Project <span>→</span>
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono px-3 py-1 bg-background rounded-full border border-border/50 text-textSecondary">
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
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentPage === idx 
                ? 'bg-primary w-8' 
                : 'bg-border hover:bg-textSecondary'
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
