import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    title: 'Starter Website',
    description: 'Perfect for small businesses looking to establish an online presence.',
    price: '₹4,999 – ₹10,000',
    features: [
      '3–5 custom pages',
      'Fully mobile responsive',
      'Basic SEO optimization',
      'Fast loading speed',
      'Contact form integration'
    ],
    popular: false,
    cta: 'Choose Starter'
  },
  {
    title: 'Business Website',
    description: 'For growing brands needing advanced features and high-tier design.',
    price: '₹14,999 – ₹20,000',
    features: [
      'Complete custom design',
      'Advanced UI/UX layout',
      'Performance & speed optimized',
      'Dynamic content management',
      'Advanced SEO setup',
      'Priority email support'
    ],
    popular: true,
    cta: 'Go Premium'
  },
  {
    title: 'AI Smart Website',
    description: 'For serious growth leveraging modern automation tools.',
    price: '₹30,000+',
    features: [
      'Everything in Business tier',
      'Custom AI chatbot integration',
      'Workflow automations',
      'E-commerce / custom features',
      'Full post-launch training',
      'Dedicated manager'
    ],
    popular: false,
    cta: 'Build Smart'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-surface/30 rounded-[40px] my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
          Transparent, fair pricing
        </h2>
        <p className="text-textSecondary text-lg max-w-2xl mx-auto">
          No hidden fees. Choose a custom roadmap designed to fit your unique goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 hover:shadow-xl ${
              plan.popular
                ? 'bg-primary text-white border-primary shadow-lg lg:-translate-y-4 hover:shadow-primary/20'
                : 'bg-white text-textPrimary border-border/50 hover:border-accent/30 hover:shadow-accent/10'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                {plan.title}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-textSecondary'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold tracking-tight">
                  {plan.price}
                </span>
              </div>

              <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-white/20' : 'bg-border/30'}`} />

              <ul className="space-y-3.5 mb-8 text-sm font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-accent'}`}>
                      ✔
                    </span>
                    <span className={plan.popular ? 'text-white/90' : 'text-textSecondary'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-primary hover:bg-white/90 hover:shadow-md'
                  : 'bg-primary text-white hover:bg-primary/90 hover:shadow-md'
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
