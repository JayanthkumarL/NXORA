import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EyeFollowButton from './EyeFollowButton';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/75 backdrop-blur-xl border-b border-outline-variant/35 shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          : 'bg-surface/50 backdrop-blur-lg border-b border-outline-variant/15'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Logo + Availability */}
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-3" href="#">
            <img
              alt="Nxora Logo"
              className="h-8 w-auto object-contain"
              src="/img/logo.png"
            />
            <span className="font-mono text-label-mono tracking-widest text-on-surface uppercase">
              Studio
            </span>
          </a>

          {/* Availability Badge — Desktop only */}
          {/* <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container/70 backdrop-blur-sm border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-label-mono-sm text-secondary font-medium tracking-wider uppercase">
              Available for Q2/Q3 Projects
            </span>
          </div> */}
        </div>

        {/* Right: Nav + CTA */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`tracking-wide transition-colors py-1 ${
                  activeSection === link.label.toLowerCase()
                    ? 'text-on-surface font-medium border-b border-secondary'
                    : 'font-sans text-body-sm text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setActiveSection(link.label.toLowerCase())}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-4">
            <EyeFollowButton
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2.5 font-mono text-label-mono tracking-widest uppercase px-5 py-2.5 rounded-lg bg-black text-white hover:bg-secondary transition-all duration-200 shadow-md hover:shadow-lg border border-black/80"
              eyeSize={16}
              pupilSize={5}
              eyeSpacing={3}
              eyeColor="#ffffff"
              pupilColor="#000000"
            >
              Book a call
            </EyeFollowButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 relative w-8 h-8 items-center justify-center rounded-lg hover:bg-surface-container/60 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-on-surface transition-all duration-300 absolute ${
                  mobileOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-on-surface transition-all duration-300 absolute ${
                  mobileOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-surface/80 backdrop-blur-2xl border-t border-b border-outline-variant/30 shadow-[0_24px_48px_rgba(0,0,0,0.08)] overflow-hidden"
            style={{
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="text-lg font-medium text-on-surface hover:text-secondary transition-colors py-3.5 border-b border-outline-variant/25 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-label-mono-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <div className="pt-4">
                <EyeFollowButton
                  href="#contact"
                  className="btn-primary text-center inline-flex items-center justify-center gap-3 w-full py-4 shadow-sm"
                  onClick={() => setMobileOpen(false)}
                  eyeSize={18}
                  pupilSize={5.5}
                  eyeSpacing={3}
                >
                  Book a call
                </EyeFollowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
