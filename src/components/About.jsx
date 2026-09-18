import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Apoorva',
    role: 'UI/UX Designe',
    // label: 'CO-FOUNDER',
    bio: 'Specializing in high-trust interface architecture, typography hierarchies, and intuitive customer onboarding flows for complex domains.',
    
  },
  {
    name: 'Jayanth',
    role: 'Full Stack Developer',
    // label: 'CO-FOUNDER',
    bio: 'Deep experience engineering scalable cloud architecture, dynamic web platforms, and high-performance web systems.',
  },
];

const About = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="about"
    >
      {/* Header: Two-column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-baseline">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-3"
        >
          <span className="section-label">05 / THE STUDIO</span>
          <h2 className="section-heading">
          Direct access. No middle layers.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
           "We founded Nxora after seeing ambitious founders get trapped between bloated agencies that move at a glacial pace and unvetted freelancers lacking architectural rigor. You work directly with the people building your product — no hand-offs, no account managers, no juniors learning on your dime."
          </p>
        </motion.div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-surface-container-lowest border border-outline-variant p-8 hover:border-secondary transition-colors duration-300"
          >
            <div className="space-y-3">
              <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-widest">
                {member.label}
              </span>
              <h3 className="font-display text-headline-md text-on-surface mt-2">{member.name}</h3>
              <p className="font-mono text-label-mono text-on-surface-variant">{member.role}</p>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed pt-2">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
