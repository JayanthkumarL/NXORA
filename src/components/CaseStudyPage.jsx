import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getCaseStudyBySlug, caseStudies, getCaseStudiesWithStories } from '../data/caseStudies';

/* ── Fade-up animation wrapper ─────────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Fullscreen Lightbox ───────────────────────────────────────────────── */
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
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, prev, next]);

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

        <div
          className="max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[82vh] max-w-full object-contain rounded shadow-2xl"
          />
        </div>

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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange(i);
              }}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`transition-all duration-200 rounded-full ${
                currentIndex === i ? 'w-2.5 h-2.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Main Case Study Page ──────────────────────────────────────────────── */

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = getCaseStudyBySlug(slug);
  const [lightbox, setLightbox] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 — study not found
  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6">
        <h1 className="font-display text-headline-xl text-on-surface mb-4">Project not found</h1>
        <p className="font-sans text-body-md text-on-surface-variant mb-8">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="btn-primary"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  // No story yet — redirect-safe message
  if (!study.story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6 text-center">
        <span className="section-label mb-4">Case {study.caseNumber}</span>
        <h1 className="font-display text-headline-xl text-on-surface mb-4">{study.title}</h1>
        <p className="font-sans text-body-md text-on-surface-variant mb-8 max-w-lg mx-auto">
          The full case study for this project is coming soon. In the meantime, you can view the live site.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/#work" className="btn-outline">
            ← Back to projects
          </Link>
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View live site →
          </a>
        </div>
      </div>
    );
  }

  const { story } = study;

  // Find next case study for "Next project" link (only cycle through projects with full stories)
  const storiesOnly = getCaseStudiesWithStories();
  const currentIdx = storiesOnly.findIndex((s) => s.slug === slug);
  const nextStudy =
    storiesOnly[(currentIdx + 1) % storiesOnly.length] || storiesOnly[0] || study;

  return (
    <>
      <div className="min-h-screen bg-surface">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Back navigation */}
            <FadeUp>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 font-mono text-label-mono text-on-surface-variant uppercase tracking-widest hover:text-secondary transition-colors mb-10 group"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                All projects
              </Link>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left: Text */}
              <div className="lg:col-span-7 space-y-6">
                <FadeUp>
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span className="case-badge">Case {study.caseNumber}</span>
                    <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase">
                      {study.category}
                    </span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.05}>
                  <h1 className="font-display text-headline-xl md:text-display-mobile lg:text-display text-on-surface text-balance">
                    {study.headline}
                  </h1>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed max-w-2xl text-justify md:text-left">
                    {study.description}
                  </p>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View live site →
                    </a>
                  </div>
                </FadeUp>
              </div>

              {/* Right: Snapshot meta */}
              <div className="lg:col-span-5">
                <FadeUp delay={0.15}>
                  <div className="bg-surface-container-lowest border border-outline-variant p-6 lg:p-8 space-y-5">
                    <span className="font-mono text-label-mono text-secondary uppercase tracking-widest block">
                      Snapshot
                    </span>
                    {Object.entries(story.snapshot).map(([key, val]) => (
                      <div key={key} className="border-t border-outline-variant/60 pt-4">
                        <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase block mb-1">
                          {key}
                        </span>
                        <p className="font-sans text-body-sm text-on-surface leading-relaxed">{val}</p>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────────────── */}
        <section className="w-full border-t border-b border-outline-variant bg-surface-container-lowest">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {story.stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.08}>
                  <div
                    className={`py-8 lg:py-10 text-center ${
                      i < story.stats.length - 1 ? 'border-r border-outline-variant/60' : ''
                    }`}
                  >
                    <motion.span
                      className="font-display text-headline-xl lg:text-display-mobile text-secondary block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest mt-2 block">
                      {stat.label}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero image gallery ────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <FadeUp>
              {/* Main image */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden rounded border border-outline-variant bg-surface-container-low cursor-pointer group"
                onClick={() =>
                  setLightbox({
                    images: study.images,
                    index: activeImage,
                    title: study.title,
                  })
                }
              >
                <img
                  src={study.images[activeImage].src}
                  alt={study.images[activeImage].alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm pointer-events-none">
                  Click to expand
                </div>
              </div>
            </FadeUp>

            {/* Thumbnail strip */}
            <FadeUp delay={0.1}>
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {study.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-14 lg:w-28 lg:h-20 rounded overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i
                        ? 'border-secondary shadow-md'
                        : 'border-outline-variant/40 opacity-60 hover:opacity-100 hover:border-outline-variant'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── The Challenge ─────────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-20 border-t border-outline-variant">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <FadeUp>
                  <span className="section-label">The Challenge</span>
                  <div className="w-12 h-px bg-secondary mt-4" />
                </FadeUp>
              </div>
              <div className="lg:col-span-8">
                <FadeUp delay={0.1}>
                  <p className="font-sans text-body-lg text-on-surface leading-relaxed max-w-3xl text-justify md:text-left">
                    {story.challenge}
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ──────────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-20 border-t border-outline-variant bg-surface-container-lowest">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <FadeUp>
                  <span className="section-label">Our Approach</span>
                  <div className="w-12 h-px bg-secondary mt-4" />
                </FadeUp>
              </div>
              <div className="lg:col-span-8">
                <FadeUp delay={0.1}>
                  {story.approach.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className={`font-sans text-on-surface leading-relaxed max-w-3xl text-justify md:text-left ${
                        i === story.approach.split('\n\n').length - 1
                          ? 'text-body-lg font-medium text-secondary mt-6'
                          : 'text-body-lg mb-4'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Solution ──────────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-24 border-t border-outline-variant">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <FadeUp>
              <span className="section-label mb-3 block">The Solution</span>
              <h2 className="section-heading mb-12 lg:mb-16">What we built</h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {story.solution.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.06}>
                  <div className="card p-6 lg:p-8 h-full group">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded bg-secondary/10 text-secondary font-mono text-label-mono flex items-center justify-center mt-0.5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-display text-title-sm text-on-surface">{item.title}</h3>
                        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed text-justify md:text-left">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Result ────────────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-20 border-t border-outline-variant bg-surface-container-lowest">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <FadeUp>
                  <span className="section-label">The Result</span>
                  <div className="w-12 h-px bg-secondary mt-4" />
                </FadeUp>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <FadeUp delay={0.1}>
                  {story.result.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-sans text-body-lg text-on-surface leading-relaxed max-w-3xl mb-4 text-justify md:text-left"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest mt-6">
                    {story.resultSource}
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why It Worked ─────────────────────────────────────────────── */}
        <section className="w-full py-16 lg:py-20 border-t border-outline-variant">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <FadeUp>
                  <span className="section-label">Why It Worked</span>
                  <div className="w-12 h-px bg-secondary mt-4" />
                </FadeUp>
              </div>
              <div className="lg:col-span-8">
                <FadeUp delay={0.1}>
                  <p className="font-sans text-body-lg text-on-surface leading-relaxed max-w-3xl text-justify md:text-left">
                    {story.whyItWorked}
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA + Next Project ────────────────────────────────────────── */}
        <section className="w-full py-20 lg:py-28 border-t border-outline-variant bg-surface-container-lowest">
          <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* CTA */}
              <FadeUp>
                <div className="space-y-6">
                  <span className="section-label">Start your project</span>
                  <h2 className="font-display text-headline-lg text-on-surface">
                    Need a website that fits how your business actually works?
                  </h2>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed max-w-lg">
                    We study your workflow first, then build around it — not the other way around.
                  </p>
                  <Link
                    to="/#contact"
                    className="btn-primary inline-flex"
                  >
                    Start your project →
                  </Link>
                </div>
              </FadeUp>

              {/* Next project */}
              <FadeUp delay={0.1}>
                <div className="flex flex-col justify-end h-full">
                  <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest mb-4">
                    Next project
                  </span>
                  <Link
                    to={`/case-study/${nextStudy.slug}`}
                    className="group card p-6 lg:p-8 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <span className="case-badge">Case {nextStudy.caseNumber}</span>
                      <h3 className="font-display text-title-sm text-on-surface group-hover:text-secondary transition-colors">
                        {nextStudy.title}
                      </h3>
                      <p className="font-sans text-body-sm text-on-surface-variant line-clamp-2">
                        {nextStudy.headline}
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
          onIndexChange={(newIndex) =>
            setLightbox((prev) => ({ ...prev, index: newIndex }))
          }
        />
      )}
    </>
  );
};

export default CaseStudyPage;
