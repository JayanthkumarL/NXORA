import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EyeFollowButton from './EyeFollowButton';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            Currently accepting select client engagements for Q2 and Q3. Every engagement is led
            directly by Apoorva and Jayanth.
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

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            className="bg-surface-container-lowest border border-outline-variant p-8 lg:p-12 space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface font-sans text-body-sm focus:border-primary focus:outline-none transition-colors"
                  id="name"
                  placeholder="Eleanor Vance"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block"
                  htmlFor="email"
                >
                  Work Email
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface font-sans text-body-sm focus:border-primary focus:outline-none transition-colors"
                  id="email"
                  placeholder="eleanor@domain.com"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Row 2: Project Type + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block"
                  htmlFor="project-type"
                >
                  Project Type
                </label>
                <select
                  className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface font-sans text-body-sm focus:border-primary focus:outline-none transition-colors"
                  id="project-type"
                >
                  <option value="web-design">Website Design & Development</option>
                  <option value="ecommerce">E-commerce & Business Website</option>
                  <option value="e2e">End-to-End Product Build</option>
                  <option value="design">Interface & Systems Redesign</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block"
                  htmlFor="budget"
                >
                  Project Scale Scope
                </label>
                <select
                  className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface font-sans text-body-sm focus:border-primary focus:outline-none transition-colors"
                  id="budget"
                >
                  <option value="tier1">$10k – $20k</option>
                  <option value="tier2">$20k – $40k</option>
                  <option value="tier3">$40k – $75k</option>
                  <option value="tier4">$75k+</option>
                </select>
              </div>
            </div>

            {/* Row 3: Details */}
            <div className="space-y-2">
              <label
                className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider block"
                htmlFor="details"
              >
                Project Details & Objectives
              </label>
              <textarea
                className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface font-sans text-body-sm focus:border-primary focus:outline-none transition-colors resize-none"
                id="details"
                placeholder="Tell us about the product, current tech stack, and primary targets..."
                required
                rows={4}
              />
            </div>

            {/* Submit */}
            <div className="space-y-3 pt-2">
              <EyeFollowButton
                as="button"
                type="submit"
                className="w-full py-4 bg-secondary text-surface font-mono text-label-mono uppercase tracking-widest hover:bg-primary-container transition-colors duration-200 inline-flex items-center justify-center gap-3.5 shadow-sm hover:shadow"
                eyeSize={20}
                pupilSize={6.5}
                eyeSpacing={3.5}
                eyeColor="#ffffff"
                pupilColor="#1b1c19"
              >
                Submit Project Brief
              </EyeFollowButton>
              <p className="font-mono text-label-mono-sm text-on-surface-variant text-center">
                We review every submission personally and respond within 24 hours.
              </p>

              {/* Confirmation */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-surface-container border border-secondary text-center"
                >
                  <p className="font-mono text-label-mono text-on-surface uppercase">
                    Brief Received. Jayanth & Apoorva will respond within 24h.
                  </p>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
