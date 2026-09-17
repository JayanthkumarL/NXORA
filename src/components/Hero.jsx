import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load NewtonCradle WebGL component for instant first paint and optimal bundle loading
const NewtonCradle = React.lazy(() => import('./originkit/ui/newton-cradle'));

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
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16 lg:py-24 flex flex-col justify-between overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 lg:col-span-7 xl:col-span-6 z-10"
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
            Your website should be the best salesperson you never pay a salary.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="font-sans text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Bespoke, high-conversion websites for growing businesses worldwide.
          </motion.p>

          {/* CTAs & Trust Line */}
          <motion.div variants={item} className="pt-2 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-primary">
                Book a call
              </a>
              <a href="#contact" className="btn-outline">
                View Work
              </a>
            </div>
            <p className="text-sm text-on-surface-variant/80 font-medium">
              Free 20-min call — no pitch, just a conversation.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Architectural Kinetic Sculpture — Fully Responsive for All Devices */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full lg:w-auto lg:col-span-5 xl:col-span-6 justify-center items-center relative mt-4 lg:mt-0"
        >
          {/* Structured Luxury Exhibit Vitrine */}
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] xl:max-w-[540px] h-[360px] sm:h-[430px] lg:h-[530px] rounded-2xl sm:rounded-3xl bg-surface-variant/20 border border-outline-variant/35 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.06)] group">
            
            {/* Top Frame Bar: Metadata & Status */}
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-widest text-on-surface-variant/75 border-b border-outline-variant/25 pb-2.5 sm:pb-3 px-1 z-10 select-none">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                FIG. 01 — KINETIC PENDULUM
              </span>
              <span className="text-secondary font-medium">4.0 Hz // MOMENTUM</span>
            </div>

            {/* 3D Kinetic Canvas Stage */}
            <div className="relative w-full flex-1 flex items-center justify-center min-h-0 my-1">
              {/* Soft, photorealistic floor contact shadow */}
              <div 
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-6 sm:h-8 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(119,88,58,0.18) 0%, rgba(0,0,0,0.07) 45%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />

              {/* Lazy loaded with lightweight graceful fallback */}
              <Suspense
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant/50">
                    <div className="w-7 h-7 rounded-full border-2 border-secondary/20 border-t-secondary animate-spin" />
                    <span className="text-[11px] font-mono tracking-widest uppercase">Initializing 3D...</span>
                  </div>
                }
              >
                <NewtonCradle
                  background="transparent"
                  baseColor="#77583a"
                  accentColor="#ffffff"
                  distance={11}
                  speed={45}
                  style={{ width: "100%", height: "100%" }}
                />
              </Suspense>
            </div>

            {/* Bottom Frame Bar: Spec details */}
            <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/65 border-t border-outline-variant/25 pt-2.5 sm:pt-3 px-1 z-10 select-none">
              <span>5-AXIS HARMONIC OSCILLATOR</span>
              <span>STUDIO NXORA // 2026</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Studio Baseline Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-on-surface-variant"
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
