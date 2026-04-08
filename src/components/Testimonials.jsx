// import React from 'react';
// import { motion } from 'framer-motion';

// const testimonials = [
//   {
//     quote: "\"Its the go-to platform for our employees.\" By integrating their services into our benefits package, our team gained invaluable tools for managing their projects and planning for the future.",
//     author: "Sarah Jenkins",
//     role: "Chief Operating Officer at TechFlow"
//   },
//   {
//     quote: "Their attention to detail and dedication to quality is unmatched. Our conversion rates doubled after the redesign and our users love the new experience.",
//     author: "Marcus Chen",
//     role: "Founder, GrowthGen"
//   },
//   {
//     quote: "Fast, responsive, and incredibly talented. They truly understand modern web aesthetics and deliver products that feel premium from day one.",
//     author: "Elena Rodriguez",
//     role: "Marketing Director at Vital"
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6 }}
//         className="mb-16"
//       >
//         <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Client Love</h2>
//         <p className="text-textSecondary text-lg">Don't just take our word for it.</p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {testimonials.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.15 }}
//             className="bg-surface p-8 md:p-10 rounded-3xl flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(29,61,20,0.06)]"
//           >
//             <p className="text-primary text-lg leading-relaxed mb-8 flex-grow">
//               {item.quote}
//             </p>
            
//             <div className="mt-auto pt-6 border-t border-border/50">
//               <h5 className="text-primary font-display font-bold">{item.author}</h5>
//               <p className="text-textSecondary text-sm mt-0.5">{item.role}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
