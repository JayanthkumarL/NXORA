import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Web Development',
    description: 'Blazing fast, responsive websites built with modern technologies like React and Next.js.',
    tag: 'Development'
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed with a focus on conversion and aesthetics.',
    tag: 'Design'
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver native-like experiences on all devices.',
    tag: 'Mobile'
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Brand Identity',
    description: 'Cohesive branding packages that help your business stand out in a crowded market.',
    tag: 'Branding'
  }
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
          A plan that works for you.
        </h2>
        <p className="text-textSecondary text-lg max-w-2xl mx-auto">
          We offer a range of services tailored to bring your vision to life.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={item} className="h-full">
            <div className="bg-surface p-8 md:p-10 rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(29,61,20,0.08)] group">
              {/* Tag */}
              <span className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-white border border-border/50 px-3.5 py-1.5 rounded-full w-fit mb-6">
                <span className="text-primary">{service.icon}</span>
                {service.tag}
              </span>
              
              <h3 className="text-2xl font-bold font-display text-primary mb-3">{service.title}</h3>
              <p className="text-textSecondary leading-relaxed flex-grow mb-6">{service.description}</p>
              
              <a href="#contact" className="text-sm font-semibold text-primary hover:text-accent flex items-center gap-2 transition-colors mt-auto w-fit group/link">
                Learn More 
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
