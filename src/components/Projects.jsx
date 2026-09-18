import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    caseNumber: '01',
    category: 'E-Commerce & Digital Commerce Platform',
    title: 'Mahadeshwara Agro Nursery Garden',
    description:
      'A full-catalog e-commerce site for a plant nursery, featuring 120+ product listings across 6 categories with a zero-friction WhatsApp ordering flow — no cart, no checkout, just a direct line from browsing to order.',
    tags: ['Next.js', 'Firebase', 'Netlify', 'WhatsApp API'],
    link: 'https://mahadeshwaraagrofarm.in',
    images: [
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163143.png',
        alt: 'Mahadeshwara Agro Nursery Garden - Screenshot 1',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163152.png',
        alt: 'Mahadeshwara Agro Nursery Garden - Screenshot 2',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163248.png',
        alt: 'Mahadeshwara Agro Nursery Garden - Screenshot 3',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163312.png',
        alt: 'Mahadeshwara Agro Nursery Garden - Screenshot 4',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163338.png',
        alt: 'Mahadeshwara Agro Nursery Garden - Screenshot 5',
      },
    ],
  },
  {
    id: 2,
    caseNumber: '02',
    category: 'Digital Hub & Program Management',
    title: 'Karnataka Sports Foundation',
    description:
      'A high-performance digital hub for athlete registration and grassroots sports program management across 20+ districts.',
    tags: ['React', 'Firebase', 'Netlify'],
    link: 'https://sportskarnataka.com/',
    images: [
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164320.png',
        alt: 'Karnataka Sports Foundation - Screenshot 1',
      },
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164355.png',
        alt: 'Karnataka Sports Foundation - Screenshot 2',
      },
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164403.png',
        alt: 'Karnataka Sports Foundation - Screenshot 3',
      },
    ],
  },
  {
    id: 3,
    caseNumber: '03',
    category: 'Photography Portfolio',
    title: 'Timeless Moments',
    description:
      'A premium wedding photography portfolio site designed to showcase high-resolution imagery and capture artistic milestones.',
    tags: ['React', 'Vercel', 'Tailwind CSS'],
    link: 'https://photography-phi-nine.vercel.app/',
    images: [
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164622.png',
        alt: 'Timeless Moments - Screenshot 1',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164634.png',
        alt: 'Timeless Moments - Screenshot 2',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164647.png',
        alt: 'Timeless Moments - Screenshot 3',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164657.png',
        alt: 'Timeless Moments - Screenshot 4',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164710.png',
        alt: 'Timeless Moments - Screenshot 5',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164729.png',
        alt: 'Timeless Moments - Screenshot 6',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164744.png',
        alt: 'Timeless Moments - Screenshot 7',
      },
    ],
  },
];

/* ── Carousel Component ────────────────────────────────────────────────── */

const ProjectCarousel = ({ images, title, onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const prev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
    setTouchStart(null);
  };

  const currentItem = images[currentIndex];

  return (
    <div className="relative w-full overflow-hidden rounded border border-outline-variant bg-surface-container-low select-none">
      {/* Main Image Stage */}
      <div
        className="relative w-full aspect-[16/10] cursor-pointer flex items-center justify-center overflow-hidden bg-[#faf9f6]"
        onClick={() => onOpenLightbox(currentIndex)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentItem.src ? (
          <img
            src={currentItem.src}
            alt={currentItem.alt || `${title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          /* Plain empty placeholder box with label only - no metrics, no fake UI */
          <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-outline-variant/60 text-on-surface-variant/70 p-6">
            <span className="font-mono text-label-mono uppercase tracking-widest">
              {currentItem.label}
            </span>
          </div>
        )}

        {/* Hover zoom hint badge */}
        <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm pointer-events-none">
          Click to expand
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant/60 bg-surface-container-lowest">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous screenshot"
          className="p-1.5 rounded text-on-surface hover:text-secondary hover:bg-surface-container transition-colors focus:outline-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIndex);
              }}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              className={`transition-all duration-200 rounded-full ${
                currentIndex === dotIndex
                  ? 'w-2 h-2 bg-secondary'
                  : 'w-1.5 h-1.5 bg-outline-variant hover:bg-on-surface-variant'
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next screenshot"
          className="p-1.5 rounded text-on-surface hover:text-secondary hover:bg-surface-container transition-colors focus:outline-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/* ── Fullscreen Lightbox Component ─────────────────────────────────────── */

const Lightbox = ({ images, currentIndex, onClose, onIndexChange, title }) => {
  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    },
    [currentIndex, images.length, onIndexChange]
  );

  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    },
    [currentIndex, images.length, onIndexChange]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prev, next]);

  const currentItem = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top bar */}
        <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10 text-white">
          <div className="font-mono text-label-mono uppercase tracking-widest text-white/80">
            {title} — {currentIndex + 1} / {images.length}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close fullscreen view"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Content Container (clicking inside will NOT close) */}
        <div
          className="max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.src ? (
            <img
              src={currentItem.src}
              alt={currentItem.alt || `${title} screenshot`}
              className="max-h-[82vh] max-w-full object-contain rounded shadow-2xl"
            />
          ) : (
            <div className="w-[600px] max-w-full h-[380px] bg-surface-container-lowest border border-outline-variant flex items-center justify-center p-8 rounded">
              <span className="font-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
                {currentItem.label}
              </span>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange(dotIndex);
              }}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              className={`transition-all duration-200 rounded-full ${
                currentIndex === dotIndex ? 'w-2.5 h-2.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Main Component ───────────────────────────────────────────────────── */

const Projects = () => {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 py-20 border-t border-outline-variant"
      id="work"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <span className="section-label">01 / SELECTED WORK</span>
          <h2 className="section-heading">Proven outcomes, delivered with precision.</h2>
        </div>
        <p className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest">
          
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            className="card p-8 lg:p-12"
            variants={cardVariant}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="case-badge">Case {study.caseNumber}</span>
                  <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase">
                    {study.category}
                  </span>
                </div>
                <h3 className="font-display text-headline-lg text-on-surface">{study.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    className="inline-flex items-center gap-2 font-mono text-label-mono uppercase tracking-widest text-on-surface border-b border-secondary pb-1 hover:text-secondary transition-colors"
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site →
                  </a>
                </div>
              </div>

              {/* Right Column: Image Carousel */}
              <div className="lg:col-span-6">
                <ProjectCarousel
                  images={study.images}
                  title={study.title}
                  onOpenLightbox={(imgIndex) =>
                    setActiveLightbox({
                      images: study.images,
                      index: imgIndex,
                      title: study.title,
                    })
                  }
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {activeLightbox && (
        <Lightbox
          images={activeLightbox.images}
          currentIndex={activeLightbox.index}
          title={activeLightbox.title}
          onClose={() => setActiveLightbox(null)}
          onIndexChange={(newIndex) =>
            setActiveLightbox((prev) => ({ ...prev, index: newIndex }))
          }
        />
      )}
    </section>
  );
};

export default Projects;
