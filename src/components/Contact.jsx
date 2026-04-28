import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, label: '@yourstudio', href: '#' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-surface rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
Let’s build something great together.        </h2>
        <p className="text-textSecondary text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          We respond within 24 hours,usually much faster. <br />Currently open to new projects — let's talk.
        </p>
        
        {/* Email & Phone CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <a 
            href="mailto:nxorabyaj@gmail.com" 
            className="group flex items-center gap-3 bg-white px-6 py-4 rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-sm w-full md:w-auto justify-center"
          >
            <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm text-primary">nxoracreation@gmail.com</span>
          </a>
          
          <a 
            href="tel:8431084592" 
            className="group flex items-center gap-3 bg-white px-6 py-4 rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-sm w-full md:w-auto justify-center"
          >
            <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm text-primary">8431084592</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="p-3 bg-white rounded-full border border-border/50 text-textSecondary hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-sm"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
