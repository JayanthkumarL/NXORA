import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Graphic: full width, rotated/flipped so circuit pattern is on the left, pure white blend with no dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/img/BBF.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(-1)', // flips horizontally so the dense circuit design is on the left
        }}
      />

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 lg:col-span-8 xl:col-span-7"
        >
          {/* Tag Line */}
          <motion.div variants={item} className="inline-flex items-center gap-2">
            <span className="font-mono text-label-mono tracking-widest text-secondary uppercase font-medium">
              [ CUSTOM WEBSITES &amp; REAL RESULTS.]
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="font-display text-display-mobile md:text-display text-on-surface tracking-tight leading-[1.08]"
          >
Your website should be the best salesperson you never pay a salary.          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"
          >
Bespoke, high-conversion websites for growing businesses worldwide.          </motion.p>

          {/* CTAs & Trust Line */}
          <motion.div variants={item} className="pt-4 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-primary">
                View Work
             </a>
              <a href="#contact" className="btn-outline">
Book a call               </a>
            </div>
            <p className="text-sm text-on-surface-variant/80 font-medium">
              Free 20-min call — no pitch, just a conversation.
            </p>
          </motion.div>
        </motion.div>

        
        </div>
      </div>
    </section>
  );
};

export default Hero;
