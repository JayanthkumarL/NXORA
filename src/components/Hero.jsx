import React from 'react';
import { motion } from 'framer-motion';
import MatrixLoader from './MatrixLoader';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 lg:col-span-8"
        >
          {/* Tag Line */}
          <motion.div variants={item} className="inline-flex items-center gap-2">
            <span className="font-mono text-label-mono tracking-widest text-secondary uppercase font-medium">
              [ WEBSITE DESIGN &amp; BESPOKE WEB DEVELOPMENT ]
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="font-display text-display-mobile md:text-display text-on-surface tracking-tight leading-[1.08]"
          >
            Engineering high-performing websites for growing businesses.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"
          >
            A specialized two-person studio designing and engineering bespoke
            websites, resilient digital flagships, and high-conversion web
            platforms for growing businesses worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="btn-primary">
              View the work
            </a>
            <a href="#contact" className="btn-outline">
              Book a call
            </a>
          </motion.div>
        </motion.div>

        {/* Matrix Loader to the right — desktop & larger devices only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex lg:col-span-4 justify-center lg:justify-end items-center"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] h-[420px] sm:h-[480px] lg:h-[520px] bg-transparent flex items-center justify-center relative overflow-hidden select-none pointer-events-none">
            <MatrixLoader
              primaryColor="#77583a"
              glowColor="transparent"
              shadowBlur={5}
              fontSize={28}
              fontWeight={500}
              font={{ fontFamily: '"DM Mono", "Geist Mono", monospace' }}
              gap={14}
              columns={4}
              digits="0101100110100101"
              fallDuration={2.6}
              flickerSpeed={0.6}
              pulseSpeed={2.4}
              staggerDelay={0.14}
              blendMode="normal"
            />
          </div>
        </motion.div>
      </div>

      {/* Studio Baseline Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-20 pt-8 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-on-surface-variant"
      >
        <div className="flex items-center gap-6 font-mono text-label-mono uppercase tracking-wider flex-wrap">
          <span className="text-on-surface font-medium">02 Principals</span>
          <span className="text-secondary">•</span>
          <span>100% Focused Attention</span>
          <span className="text-secondary">•</span>
          <span>Direct Founder Access</span>
        </div>
        <div className="font-mono text-label-mono-sm tracking-widest text-secondary uppercase">
          LOCATIONS / BANGALORE &amp; LONDON
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
