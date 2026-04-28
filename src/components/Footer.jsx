import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 bg-surface mt-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt="NXORA Logo" className="h-10 w-auto rounded-lg" />
          <div className="font-display font-bold text-xl tracking-tight text-primary">
             NXORA
          </div>
        </div>
        
        <div className="flex gap-6 text-sm text-textSecondary font-medium">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="text-sm text-textMuted">
          © {new Date().getFullYear()} NXORA — Crafted with TRUST
        </div>
      </div>
    </footer>
  );
};

export default Footer;
