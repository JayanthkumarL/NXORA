import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxSocialFAB from './components/ParallaxSocialFAB';
import SmoothCursor from './components/SmoothCursor';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-surface"
    >
      <SmoothCursor size={28} color="#111111" stiffness={500} damping={35} />
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Projects />
          <Process />
          <Services />
          <Testimonials />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />

      {/* Floating Parallax Social Sharing Action Button */}
      <div className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 z-50 pointer-events-none flex items-center justify-center">
        <div className="pointer-events-auto">
          <ParallaxSocialFAB
            shareText="NXORA Studio — Engineering high-performing websites for growing businesses"
            emailSubject="NXORA Studio — Inquiry & Collaboration"
            fabIcon="Plus"
            fabOpenOnHover={true}
            pulseEnabled={true}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
