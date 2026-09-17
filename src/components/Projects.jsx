import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    caseNumber: '01',
    category: 'E-Commerce & Digital Commerce Platform',
    title: 'Mahadeshwara Agro Nursery Garden',
    description:
      'Custom high-speed catalog architecture & seamless direct-order pipeline driving 3.2x faster checkout cycles.',
    tags: ['Custom Architecture', 'Next.js', 'FastAPI', 'Direct Order Flow'],
    link: 'https://mahadeshwaraagrofarm.in',
    mockup: {
      header: { label: 'COMMERCE ENGINE // ACTIVE', sub: 'E-Commerce & Digital Commerce Platform' },
      stats: [
        { label: 'REAL-TIME SKU SYNC', value: '1,482', sub: '+18.4% automated flow' },
        { label: 'LATENCY REDUCTION', value: '3.2x', sub: 'Direct checkout trigger' },
      ],
      trace: {
        title: 'ORDER PIPELINE TRACE',
        sub: 'E-Commerce & Digital Commerce Platform',
        lines: [
          '> Incoming Webhook: [WhatsApp: +91 94812*****]',
          '> Parsed Intent: StockQuery("Ficus Bonsai", qty=40)',
        ],
        highlight: '> Dispatched: Stripe Invoice Link Generated [ID_8204]',
      },
    },
  },
  {
    id: 2,
    caseNumber: '02',
    category: 'High-Scale Web Infrastructure',
    title: 'Karnataka Sports Foundation',
    description:
      'High-throughput athlete portal and registration pipeline handling 25,000+ applicants with zero downtime.',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Cloudflare Workers'],
    link: 'https://sportskarnataka.com/',
    mockup: {
      header: { label: 'REGISTRATION PIPELINE MONITOR', sub: '0.00% ERROR RATE' },
      capacity: {
        label: 'APPLICANT CAPACITY',
        value: '25,480 / 25,000',
        bar: 100,
        bottomLeft: 'PEAK CONCURRENCY: 3,420 REQ/SEC',
        bottomRight: 'AVG TTFB: 42MS',
      },
      badges: [
        { label: 'VERIFIED', value: '100%' },
        { label: 'UPTIME', value: '99.99%' },
        { label: 'INGESTION', value: 'INSTANT', accent: true },
      ],
    },
  },
  {
    id: 3,
    caseNumber: '03',
    category: 'Editorial Commerce & Asset Staging',
    title: 'Timeless Moments',
    description:
      'Boutique editorial e-commerce platform with dynamic asset staging and bespoke typography.',
    tags: ['React', 'Tailwind CSS', 'Python AI Pipelines', 'Stripe'],
    link: 'https://photography-phi-nine.vercel.app/',
    mockup: {
      header: { label: 'EDITORIAL CATALOG // STAGE 03', sub: 'GLOBAL CDN' },
      collections: [
        {
          label: 'COLLECTION 01',
          title: "L'Ombre",
          sub: 'Automated Color Grading • Clean',
        },
        {
          label: 'PIPELINE METRIC',
          title: '12.4s',
          sub: 'Asset Ingestion to Staging',
        },
      ],
      fontSystem: {
        label: 'CURATED FONT SYSTEM',
        value: 'Playfair Display & JetBrains Mono',
      },
    },
  },
];

/* ── Mockup Renderers ─────────────────────────────────────────────────── */

const MockupCase1 = ({ mockup }) => (
  <div className="space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-outline-variant pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
        <span className="font-mono text-label-mono-sm text-on-surface uppercase tracking-wider">
          {mockup.header.label}
        </span>
      </div>
      <span className="font-mono text-label-mono-sm text-on-surface-variant hidden sm:inline">
        {mockup.header.sub}
      </span>
    </div>
    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-3 pt-2">
      {mockup.stats.map((stat, i) => (
        <div key={i} className="bg-surface-container-lowest p-3 border border-outline-variant">
          <span className="font-mono text-label-mono-sm text-on-surface-variant block mb-1">
            {stat.label}
          </span>
          <span className="font-display text-headline-md text-on-surface">{stat.value}</span>
          <span className="font-mono text-label-mono-sm text-secondary block mt-1">{stat.sub}</span>
        </div>
      ))}
    </div>
    {/* Trace */}
    <div className="bg-surface-container-lowest border border-outline-variant p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-widest">
          {mockup.trace.title}
        </span>
        <span className="font-mono text-label-mono-sm text-on-surface-variant hidden sm:inline">
          {mockup.trace.sub}
        </span>
      </div>
      <div className="font-mono text-label-mono-sm text-on-surface-variant space-y-1">
        {mockup.trace.lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <p className="text-secondary">{mockup.trace.highlight}</p>
      </div>
    </div>
  </div>
);

const MockupCase2 = ({ mockup }) => (
  <div className="space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-outline-variant pb-3">
      <span className="font-mono text-label-mono-sm text-on-surface uppercase tracking-wider">
        {mockup.header.label}
      </span>
      <span className="font-mono text-label-mono-sm text-secondary">{mockup.header.sub}</span>
    </div>
    {/* Capacity Bar */}
    <div className="bg-surface-container-lowest border border-outline-variant p-4">
      <div className="flex justify-between items-baseline mb-3">
        <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase">
          {mockup.capacity.label}
        </span>
        <span className="font-mono text-label-mono text-on-surface font-medium">
          {mockup.capacity.value}
        </span>
      </div>
      <div className="w-full bg-surface-container h-1.5 overflow-hidden">
        <motion.div
          className="bg-secondary h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${mockup.capacity.bar}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
      <div className="flex justify-between items-center mt-3 text-on-surface-variant font-mono text-label-mono-sm">
        <span>{mockup.capacity.bottomLeft}</span>
        <span className="text-on-surface font-medium">{mockup.capacity.bottomRight}</span>
      </div>
    </div>
    {/* Badges */}
    <div className="grid grid-cols-3 gap-2 text-center">
      {mockup.badges.map((badge, i) => (
        <div key={i} className="bg-surface-container-lowest border border-outline-variant p-2.5">
          <span className="font-mono text-label-mono-sm text-on-surface-variant block">
            {badge.label}
          </span>
          <span
            className={`font-mono text-label-mono font-medium ${
              badge.accent ? 'text-secondary' : 'text-on-surface'
            }`}
          >
            {badge.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const MockupCase3 = ({ mockup }) => (
  <div className="space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-outline-variant pb-3">
      <span className="font-mono text-label-mono-sm text-on-surface uppercase tracking-wider">
        {mockup.header.label}
      </span>
      <span className="font-mono text-label-mono-sm text-secondary">{mockup.header.sub}</span>
    </div>
    {/* Collections */}
    <div className="grid grid-cols-2 gap-3">
      {mockup.collections.map((col, i) => (
        <div
          key={i}
          className="bg-surface-container-lowest border border-outline-variant p-4 flex flex-col justify-between h-40"
        >
          <div>
            <span className="font-mono text-label-mono-sm text-secondary">{col.label}</span>
            <p className="font-display text-headline-md text-on-surface mt-1">{col.title}</p>
          </div>
          <span className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-wider">
            {col.sub}
          </span>
        </div>
      ))}
    </div>
    {/* Font System */}
    <div className="bg-surface-container-lowest border border-outline-variant p-3 flex items-center justify-between">
      <span className="font-mono text-label-mono-sm text-on-surface-variant">
        {mockup.fontSystem.label}
      </span>
      <span className="font-mono text-label-mono-sm text-on-surface font-medium uppercase">
        {mockup.fontSystem.value}
      </span>
    </div>
  </div>
);

const mockupRenderers = [MockupCase1, MockupCase2, MockupCase3];

/* ── Main Component ───────────────────────────────────────────────────── */

const Projects = () => {
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
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="work"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <span className="section-label">01 / SELECTED WORK</span>
          <h2 className="section-heading">Proven outcomes, delivered with precision.</h2>
        </div>
        <p className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest">
          ARCHITECTED 2024–2025
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-16">
        {caseStudies.map((study, index) => {
          const MockupRenderer = mockupRenderers[index];
          return (
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
                      View case study →
                    </a>
                  </div>
                </div>

                {/* Right Column: Data Mockup */}
                <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant p-6">
                  <MockupRenderer mockup={study.mockup} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
