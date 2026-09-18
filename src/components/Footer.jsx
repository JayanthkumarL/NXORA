import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Col 1: Studio Info */}
          {/* Col 1: Studio Info */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-display text-headline-md text-on-surface font-normal block">
                Nxora Studio
              </span>
              <p className="font-sans text-body-md text-on-surface-variant max-w-md">
                Website design and full-stack development crafting bespoke digital flagships
                and high-conversion web platforms for growing businesses.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6">
                <a
                  href="mailto:nxoracreation@gmail.com"
                  className="font-mono text-label-mono text-on-surface hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-on-surface-variant uppercase text-label-mono-sm">Email:</span>
                  <span>nxoracreation@gmail.com</span>
                </a>
                <a
                  href="tel:+917676111732"
                  className="font-mono text-label-mono text-on-surface hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-on-surface-variant uppercase text-label-mono-sm">Phone:</span>
                  <span>+91 7676111732</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-5 lg:col-span-4 flex md:justify-end">
            <div className="space-y-4">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-label-mono-sm text-on-surface-variant tracking-wider uppercase">
            © {new Date().getFullYear()} NXORA STUDIO. STRICT CONFIDENTIALITY OBSERVED.
          </div>
          <div className="font-mono text-label-mono-sm text-on-surface-variant tracking-wider uppercase">
            Connect-Work-Deliver
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
