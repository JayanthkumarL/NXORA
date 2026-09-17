import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Apoorva',
    role: 'UI/UX Designer & Design Systems Lead',
    label: 'CO-FOUNDER',
    bio: 'Specializing in high-trust interface architecture, typography hierarchies, and intuitive customer onboarding flows for complex domains.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjpGs1zjWXPzbdk-Uvi03n7v-kuuCGV23pDWezuJ5JmDa3WQmMAEc4tAAiDQO4_EJaH_NTZ1ytQGRd7ibac6HJ5Y2FFyX0MDFzZaslcGZ1C3-UCLkwF0vinnllFV0RauYiyuXrtqLlp_l6VsQd7xsEVylSu5adBDAJKNP-Td0qD_dZoE-XRlek185bzz3cAxyaSn2l7jQFHm4t4g1d0BO_SUrqIT-VW8wdNxsB67iYThykQ4gNwiY',
  },
  {
    name: 'Jayanth',
    role: 'Full Stack Developer & Web Architect',
    label: 'CO-FOUNDER',
    bio: 'Deep experience engineering scalable cloud architecture, dynamic web platforms, and high-performance web systems.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtFd2d78AWT7CafegcNR4D7bK4RiHGextR2fR85bv1ljPjsXXl4DUJUaWnlgkTjSwjbS2jITsXOY6MUr0ZxxAsuTUnxI19kqul5ObDcuu3TZZU1RWay6_IG_a09npdrYlL23npCyzBXsdC06QXe6s1PrAH2IlfvsBKC4dGtfelQ9KiXk5Sjh11iHso_60TogywpeVCrKhRuVyEAWnQRVCb2xqmm_VhlMvAN_oxfsQVAMmCaQZv0iA',
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
            Two senior operators. No juniors, no account managers.
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
            We founded Nxora after seeing ambitious founders get trapped between bloated agencies
            that move at a glacial pace and unvetted freelancers lacking architectural rigor. By
            deliberately remaining a two-person studio, we personally architect, design, and code
            every single line of your product.
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
            className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col md:flex-row gap-6 items-start hover:border-secondary transition-colors duration-300"
          >
            <img
              alt={`${member.name} - ${member.role}`}
              className="w-32 h-32 md:w-40 md:h-40 object-cover border border-outline-variant flex-shrink-0"
              src={member.image}
            />
            <div className="space-y-3">
              <div>
                <span className="font-mono text-label-mono-sm text-secondary uppercase tracking-widest">
                  {member.label}
                </span>
                <h3 className="font-display text-headline-md text-on-surface">{member.name}</h3>
                <p className="font-mono text-label-mono text-on-surface-variant">{member.role}</p>
              </div>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
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
