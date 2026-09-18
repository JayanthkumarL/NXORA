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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Scroll spy to highlight active section
  useEffect(() => {
    const sectionIds = ['work', 'services', 'process', 'about', 'contact'];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Robust smooth scroll handler for both mobile and desktop
  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMobileOpen(false);
    document.body.style.overflow = '';

    if (href === '#' || !href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('work');
      return;
    }

    const targetId = href.replace('#', '');
    setActiveSection(targetId.toLowerCase());

    // Small delay ensures body overflow is unlocked before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = Math.max(0, elementPosition - navHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/45 backdrop-blur-2xl border-b border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.8)]'
          : 'bg-white/30 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_24px_0_rgba(0,0,0,0.03),inset_0_1px_1px_0_rgba(255,255,255,0.6)]'
      }`}
      style={{
        backdropFilter: 'blur(28px) saturate(190%)',
        WebkitBackdropFilter: 'blur(28px) saturate(190%)',
      }}
    >
      <div className="h-20 max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-3 cursor-pointer"
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
          >
            <img
              alt="Nxora Logo"
              className="h-8 w-auto object-contain"
              src="/img/logo.png"
            />
            <span className="font-mono text-label-mono tracking-widest text-on-surface uppercase">
              Studio
            </span>
          </a>
        </div>

        {/* Right: Nav + CTA */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`tracking-wide transition-colors py-1 cursor-pointer ${
                  activeSection === link.label.toLowerCase()
                    ? 'text-on-surface font-medium border-b border-secondary'
                    : 'font-sans text-body-sm text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <EyeFollowButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2.5 font-mono text-label-mono tracking-widest uppercase px-5 py-2.5 rounded-lg bg-secondary text-white hover:bg-secondary-hover transition-all duration-200 shadow-md hover:shadow-lg border border-secondary"
              eyeSize={16}
              pupilSize={5}
              eyeSpacing={3}
              eyeColor="#ffffff"
              pupilColor="#000000"
            >
              Book a call
            </EyeFollowButton>

            {/* Professional Editorial Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-black/10 bg-white/70 backdrop-blur-md shadow-xs hover:border-secondary/40 hover:bg-white transition-all duration-200 focus:outline-none touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between items-center">
                <span
                  className={`w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300 transform origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[7px] bg-secondary' : ''
                  }`}
                />
                <span
                  className={`w-3.5 h-0.5 bg-on-surface rounded-full transition-all duration-200 self-start ${
                    mobileOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300 transform origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[7px] bg-secondary' : ''
                  }`}
                />
              </div>
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
            className="md:hidden bg-white/85 backdrop-blur-2xl border-t border-b border-white/50 shadow-[0_24px_48px_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.7)] max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{
              backdropFilter: 'blur(30px) saturate(190%)',
              WebkitBackdropFilter: 'blur(30px) saturate(190%)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium transition-colors py-3.5 border-b border-outline-variant/25 flex items-center justify-between cursor-pointer touch-manipulation ${
                    activeSection === link.label.toLowerCase()
                      ? 'text-secondary font-semibold'
                      : 'text-on-surface hover:text-secondary'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-label-mono-sm text-secondary">
                    0{i + 1}
                  </span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="btn-primary text-center flex items-center justify-center gap-3 w-full py-4 shadow-sm touch-manipulation"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Book a call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
