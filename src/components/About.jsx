import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Node.js', 'TypeScript', 'UI/UX'];

const team = [
  {
    name: 'Apoorva',
    role: 'UI/UX Designer',
    initials: 'A',
    gradient: 'from-accent to-primary'
  },
  {
    name: 'Jayanth',
    role: 'Full Stack Developer',
    initials: 'J',
    gradient: 'from-primary to-accent'
  }
  
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Col: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Small team,<br />big impact.
          </h2>
          <div className="space-y-5 text-textSecondary text-lg leading-relaxed text-justify">
            <p>
              We help startups launch faster with clean, conversion-focused websites and web apps. You work directly with us from planning to deployment, no middle layers, no delays.
            </p>
            <p>
              Our combined expertise allows us to build 
              products that not only look stunning but perform flawlessly across all devices.
            </p>
          </div>

          <div className="mt-12 border-t border-border/30">
            {[
              { title: 'Built for Speed', desc: 'Sub-3s load times, every time' },
              { title: 'Flawless on Every Screen', desc: 'Phone to desktop' },
              { title: 'Found on Google', desc: 'Clean code, optimised from day one' },
              { title: 'Grows With You', desc: 'No rebuilds as your business scales' }
            ].map((item, index) => (
              <div key={index} className="py-4 border-b border-border/30 text-lg flex items-baseline gap-2">
                <span className="text-accent">•</span>
                <div>
                  <span className="font-display font-semibold text-primary">{item.title}</span>
                  <span className="text-primary/60 font-display"> — </span>
                  <span className="text-textSecondary">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-10">
            <h3 className="text-primary font-semibold font-display mb-4 text-lg">Core Technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-surface text-sm font-mono text-primary border border-border/50 hover:bg-white hover:border-accent/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* Right Col: Team */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 relative"
        >
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex-1 bg-surface p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(29,61,20,0.08)]"
            >
              <div className={`w-24 h-24 rounded-full mb-6 bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-sm`}>
                <span className="text-3xl font-display font-bold text-white">{member.initials}</span>
              </div>
              <h4 className="text-xl font-display font-bold text-primary mb-1">{member.name}</h4>
              <p className="text-accent font-mono text-xs uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
