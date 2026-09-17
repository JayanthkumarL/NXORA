import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Col 1: Studio Info */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-headline-md text-on-surface font-normal">
                  Nxora Studio
                </span>
                <span className="font-mono text-label-mono-sm text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">
                  Boutique Practice
                </span>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant max-w-md">
                Website design and full-stack development studio crafting bespoke digital flagships
                and high-conversion web platforms for growing businesses.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                Bangalore & London / Global Clients
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono text-label-mono tracking-widest text-on-surface-variant uppercase">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'Selected Work', href: '#work' },
                { label: 'Capabilities & Services', href: '#services' },
                { label: 'The Nxora Process', href: '#process' },
                { label: 'Studio Manifesto', href: '#about' },
                { label: 'Initiate Dialogue', href: '#contact' },
              ].map((link) => (
                <li key={link.label} className="leading-none">
                  <a
                    className="font-sans text-body-sm text-on-surface hover:text-secondary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: External Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono text-label-mono tracking-widest text-on-surface-variant uppercase">
              Dispatches & Network
            </div>
            <ul className="space-y-2.5">
              {[
                {
                  label: 'GitHub',
                  sub: '/src',
                  href: 'https://github.com',
                },
                {
                  label: 'LinkedIn',
                  sub: '/in',
                  href: 'https://linkedin.com',
                },
                {
                  label: 'Direct Dispatch',
                  sub: 'hello@',
                  href: 'mailto:nxoracreation@gmail.com',
                },
              ].map((link) => (
                <li key={link.label} className="leading-none">
                  <a
                    className="font-sans text-body-sm text-on-surface hover:text-secondary transition-colors flex items-center justify-between group"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-label-mono-sm text-on-surface-variant group-hover:text-secondary">
                      {link.sub}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-label-mono-sm text-on-surface-variant tracking-wider uppercase">
            © {new Date().getFullYear()} NXORA STUDIO. STRICT CONFIDENTIALITY OBSERVED.
          </div>
          <div className="font-mono text-label-mono-sm text-on-surface-variant tracking-wider uppercase">
            2-PERSON INDEPENDENT ENGINEERING OFFICE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
