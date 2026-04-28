import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      {/* Background: large rounded surface card like Trinity */}
      <div className="absolute inset-x-4 md:inset-x-8 top-20 bottom-8 bg-surface rounded-3xl -z-10" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Availability Badge */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-border/50 text-sm font-medium text-accent shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for Projects ✦
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          variants={item}
          className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-primary mb-8"
        >
"We Don't Just Build Websites.
 We Build Your Competitive Edge."          
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          variants={item}
          className="text-lg md:text-xl text-textSecondary max-w-xl mx-auto mb-12 leading-relaxed"
        >
         Nxora helps startups and growing businesses launch fast, high-performing websites and smart digital solutions designed to increase visibility, engagement, and conversions.

        </motion.p>
        
        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#work" className="btn-primary">
            View Our Work
          </a>
          <a href="#contact" className="btn-outline">
            Book Free Consultation
          </a>
        </motion.div>
        
        <motion.p variants={item} className="text-sm text-textMuted mt-4">
No commitment. Just a quick discussion about your business.        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
