import React from 'react';
import { motion } from 'framer-motion';

const clientNames = [
  'AURIC CAPITAL',
  'VERIS ANALYTICS',
  'TERRAFORM GLOBAL',
  'CRESTLINE LABS',
  'VALENCE',
];

const Testimonials = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-12"
      >
        <span className="section-label">04 / ENDORSEMENTS</span>
      </motion.div>

      {/* Featured Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="bg-surface-container-lowest border border-outline-variant p-10 lg:p-16"
      >
        <blockquote className="font-display text-headline-lg text-on-surface max-w-4xl leading-snug">
          "Nxora felt less like an outsourced agency and more like having two senior technical
          co-founders join our sprint. They rebuilt our core customer web platform in three weeks
          flat."
        </blockquote>
        <div className="mt-8 pt-6 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <cite className="not-italic font-sans text-title-sm text-on-surface block font-medium">
              Nathan Vance
            </cite>
            <span className="font-sans text-body-sm text-on-surface-variant">
              Founder & CEO at Auric FinTech (London)
            </span>
          </div>
          <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-widest">
            VERIFIED ENGAGEMENT
          </span>
        </div>
      </motion.div>

      {/* Client Wordmarks Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 pt-8 border-t border-outline-variant"
      >
        <p className="font-mono text-label-mono-sm text-on-surface-variant uppercase tracking-widest text-center mb-8">
          TRUSTED BY OPERATORS & VENTURE FOUNDERS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
          {clientNames.map((name) => (
            <motion.span
              key={name}
              whileHover={{ opacity: 1 }}
              className="font-display text-headline-md text-on-surface tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
