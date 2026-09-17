import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  {
    id: '01',
    number: '01',
    tag: 'PHASE 01',
    title: 'Discovery Call',
    headline: '01 — Discovery Call',
    description:
      'A focused 30-minute technical consultation to diagnose architecture bottlenecks, assess workflow viability, and align on product objectives.',
    timeline: 'TIMELINE: DAY 1',
    badge: 'DAY 1',
    deliverables: [
      'Direct consultation with principals',
      'Architecture & tech stack audit',
      'Technical viability appraisal',
    ],
    bgGradient: 'from-[#1a1816]/95 via-[#231f1c]/90 to-[#121110]/95',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: '02',
    number: '02',
    tag: 'PHASE 02',
    title: 'Scope & Design',
    headline: '02 — Scope & Design',
    description:
      'Detailed technical architecture, interactive wireframes, component design systems, and a fixed-timeline roadmap agreed upon within days.',
    timeline: 'TIMELINE: 3–5 DAYS',
    badge: '3–5 DAYS',
    deliverables: [
      'Interactive Figma design prototype',
      'Component system specifications',
      'Milestone & sprint breakdown',
    ],
    bgGradient: 'from-[#1c1a17]/95 via-[#26211d]/90 to-[#141211]/95',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect height="18" rx="2" width="18" x="3" y="3" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="9" x2="9" y1="21" y2="9" />
      </svg>
    ),
  },
  {
    id: '03',
    number: '03',
    tag: 'PHASE 03',
    title: 'Build & Engineer',
    headline: '03 — Build & Engineer',
    description:
      'Rapid two-week production sprints with direct Slack/Telegram access, continuous staging deploys, and performance-first engineering.',
    timeline: 'TIMELINE: 2–4 WEEKS',
    badge: '2–4 WEEKS',
    deliverables: [
      'Production React/Vite codebase',
      'Continuous staging deployments',
      'Direct founder Slack/Telegram channel',
    ],
    bgGradient: 'from-[#191815]/95 via-[#24201c]/90 to-[#11100f]/95',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" x2="10" y1="4" y2="20" />
      </svg>
    ),
  },
  {
    id: '04',
    number: '04',
    tag: 'PHASE 04',
    title: 'Launch & Support',
    headline: '04 — Launch & Support',
    description:
      'Seamless production cutover, DNS & CDN optimization, team onboarding, comprehensive documentation, and a 30-day post-launch warranty.',
    timeline: 'TIMELINE: 30-DAY WARRANTY',
    badge: '30-DAY WARRANTY',
    deliverables: [
      'Zero-downtime DNS & CDN launch',
      'Lighthouse & SEO verification',
      '30-day post-launch guarantee',
    ],
    bgGradient: 'from-[#1b1916]/95 via-[#25201b]/90 to-[#131110]/95',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const Process = () => {
  const [activeId, setActiveId] = useState('01');

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="process"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-12"
      >
        <div className="flex items-center gap-3">
          <span className="section-label">02 / HOW WE ENGAGE</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="hidden sm:inline-block font-mono text-label-mono-sm text-on-surface-variant uppercase">
            Accordion Interactive Flow
          </span>
        </div>
        <h2 className="section-heading">
          Direct collaboration. Zero agency bureaucracy.
        </h2>
      </motion.div>

      {/* ─── DESKTOP VIEW: Expanding Flex Accordion Cards (hidden on small mobile) ─── */}
      <div className="hidden md:flex h-[460px] w-full gap-3.5 select-none">
        {phases.map((phase) => {
          const isExpanded = activeId === phase.id;

          return (
            <motion.div
              key={phase.id}
              layout
              onClick={() => setActiveId(phase.id)}
              onMouseEnter={() => setActiveId(phase.id)}
              transition={{
                layout: { type: 'spring', stiffness: 220, damping: 28 },
              }}
              className={`relative h-full overflow-hidden border transition-colors duration-300 cursor-pointer ${
                isExpanded
                  ? 'flex-[3.5] border-secondary bg-surface-container-lowest shadow-lg shadow-black/5'
                  : 'flex-[1] border-outline-variant bg-surface-container-lowest hover:border-secondary/50 hover:bg-surface-container-low'
              }`}
            >
              {/* Subtle glass architectural background gradient when active */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${phase.bgGradient} pointer-events-none`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.7) 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                </motion.div>
              )}

              {/* ── EXPANDED CARD VIEW ── */}
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-between text-surface"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-surface/15">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-label-mono text-secondary-container tracking-widest uppercase font-semibold">
                        {phase.tag}
                      </span>
                      <span className="text-surface/30">•</span>
                      <span className="font-mono text-label-mono-sm text-surface/70 uppercase">
                        {phase.badge}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-full bg-surface/10 text-secondary-container border border-surface/15">
                      {phase.icon}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4 my-auto py-4">
                    <h3 className="font-display text-3xl lg:text-4xl text-surface font-medium leading-tight">
                      {phase.headline}
                    </h3>
                    <p className="font-sans text-body-md text-surface/80 max-w-xl leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="pt-3 space-y-2">
                      <span className="font-mono text-label-mono-sm text-secondary-container uppercase tracking-wider block">
                        Phase Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                        {phase.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container flex-shrink-0" />
                            <span className="font-sans text-body-sm text-surface/85">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="pt-4 border-t border-surface/15 flex items-center justify-between font-mono text-label-mono-sm text-surface/60 uppercase">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{phase.timeline}</span>
                    </div>
                    <span className="tracking-widest">PHASE {phase.number} OF 04</span>
                  </div>
                </motion.div>
              ) : (
                /* ── COLLAPSED SLIM CARD VIEW ── */
                <div className="relative h-full p-6 flex flex-col justify-between items-center text-center">
                  {/* Top: Number & Icon */}
                  <div className="flex flex-col items-center gap-3">
                    <span className="font-mono text-label-mono font-medium text-secondary tracking-wider">
                      {phase.number}
                    </span>
                    <div className="text-on-surface-variant group-hover:text-primary transition-colors">
                      {phase.icon}
                    </div>
                  </div>

                  {/* Center: Vertical Title */}
                  <div className="my-auto py-8">
                    <span
                      className="font-sans text-title-sm text-on-surface font-medium uppercase tracking-wider block whitespace-nowrap"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {phase.title}
                    </span>
                  </div>

                  {/* Bottom: Timeline Pill */}
                  <div className="pt-2 border-t border-outline-variant/60 w-full text-center">
                    <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">
                      {phase.badge}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ─── MOBILE VIEW: Vertical Accordion (for screens < 768px) ─── */}
      <div className="flex md:hidden flex-col gap-3 w-full">
        {phases.map((phase) => {
          const isExpanded = activeId === phase.id;

          return (
            <motion.div
              key={phase.id}
              layout
              onClick={() => setActiveId(isExpanded ? null : phase.id)}
              transition={{ layout: { type: 'spring', stiffness: 260, damping: 28 } }}
              className={`border overflow-hidden transition-colors duration-200 cursor-pointer ${
                isExpanded
                  ? 'border-secondary bg-surface-container-lowest'
                  : 'border-outline-variant bg-surface-container-lowest'
              }`}
            >
              {/* Header Bar */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-label-mono font-bold text-secondary">
                    {phase.number}
                  </span>
                  <div className="text-left">
                    <h3 className="font-sans text-title-sm text-on-surface font-medium">
                      {phase.title}
                    </h3>
                    <span className="font-mono text-label-mono-sm text-on-surface-variant">
                      {phase.badge}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <div className="p-1.5 rounded-full bg-surface-container">
                    {phase.icon}
                  </div>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs text-on-surface-variant"
                  >
                    ▼
                  </motion.span>
                </div>
              </div>

              {/* Collapsible Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-6 pt-2 border-t border-outline-variant/60 space-y-4"
                  >
                    <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-wider block">
                        Deliverables
                      </span>
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          <span className="font-sans text-body-sm text-on-surface">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between font-mono text-label-mono-sm text-secondary">
                      <span>{phase.timeline}</span>
                      <span className="text-on-surface-variant">DIRECT PRINCIPALS</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
