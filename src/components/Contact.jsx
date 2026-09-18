import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Context */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="section-label">06 / COMMENCE A PROJECT</span>
          <h2 className="section-heading">Let's build something great together.</h2>
          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
            Currently accepting select client engagements for Q2 and Q3.
          </p>

          <div className="pt-8 border-t border-outline-variant space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <div>
                <span className="font-mono text-label-mono text-on-surface uppercase block font-medium">
                  Direct Principal Access
                </span>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  No middle managers or junior handoffs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <div>
                <span className="font-mono text-label-mono text-on-surface uppercase block font-medium">
                  Fixed-Timeline Delivery
                </span>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  Transparent milestones and strict sprint pacing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="bg-surface-container-lowest border border-outline-variant p-8 lg:p-12 space-y-6">
            <div className="space-y-4">
              <a
                href="mailto:nxoracreation@gmail.com"
                className="w-full py-4 px-6 bg-surface-container-low border border-outline-variant hover:border-secondary hover:bg-surface-container transition-colors duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-label-mono text-on-surface hover:text-secondary"
              >
                <span className="text-on-surface-variant uppercase text-label-mono-sm">Email</span>
                <span className="tracking-wide">nxoracreation@gmail.com</span>
              </a>
              <a
                href="tel:+917676111732"
                className="w-full py-4 px-6 bg-surface-container-low border border-outline-variant hover:border-secondary hover:bg-surface-container transition-colors duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-label-mono text-on-surface hover:text-secondary"
              >
                <span className="text-on-surface-variant uppercase text-label-mono-sm">Phone</span>
                <span className="tracking-wide">+91 7676111732</span>
              </a>
            </div>

            <p className="font-mono text-label-mono-sm text-on-surface-variant text-center">
              We review every submission personally and respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
