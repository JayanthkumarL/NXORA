import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    discipline: 'CORE DISCIPLINE',
    number: '01',
    title: 'AI Website Development',
    description:
      'Production-grade AI-powered web applications, responsive digital flagships, and high-performance custom platforms built on modern TypeScript, Next.js, and clean cloud architecture.',
    deliverables:
      'Full-stack web apps • Bespoke architecture • Performance optimization • SEO & Edge deploys',
  },
  {
    discipline: 'EXPERIENCE DESIGN',
    number: '02',
    title: 'UI/UX Design',
    description:
      'Editorial-grade interface systems that balance conversion rigor with refined aesthetic maturity, tailored to growing businesses and high-trust products.',
    deliverables:
      'Design systems • Responsive prototypes • Friction-free user onboarding • Visual hierarchy',
  },
  {
    discipline: 'DIGITAL COMMERCE',
    number: '03',
    title: 'E-commerce & Business Websites',
    description:
      'Tailored business websites and bespoke online stores architected to turn passive traffic into loyal paying customers with speed and clarity.',
    deliverables:
      'Bespoke Shopify & Headless setups • High-conversion checkout funnels • CMS integration • Catalog architecture',
  },
  {
    discipline: 'POSITIONING',
    number: '04',
    title: 'Brand Identity',
    description:
      'Cohesive visual guidelines, typography pairings, and digital design language that command authority in institutional and global markets.',
    deliverables:
      'Logo marks • Art direction • Brand guidelines • Monograph-style pitch collateral',
  },
];

const Services = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="services"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-16"
      >
        <span className="section-label">03 / CAPABILITIES</span>
        <h2 className="section-heading">
          Built for founders who value depth over headcount.
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-8 lg:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-label-mono text-secondary uppercase tracking-widest">
                  {service.discipline}
                </span>
                <span className="font-mono text-label-mono-sm text-on-surface px-2 py-0.5 border border-outline-variant">
                  {service.number}
                </span>
              </div>
              <h3 className="font-display text-headline-lg text-on-surface">{service.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant space-y-2">
              <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-wider block">
                KEY DELIVERABLES:
              </span>
              <p className="font-sans text-body-sm text-on-surface">{service.deliverables}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
