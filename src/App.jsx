import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxSocialFAB from './components/ParallaxSocialFAB';
import SmoothCursor from './components/SmoothCursor';
import CaseStudyPage from './components/CaseStudyPage';
import ScrollToHash from './components/ScrollToHash';

/* ── Home page (all sections) ──────────────────────────────────────────── */
const HomePage = () => (
  <main className="w-full pt-20 bg-surface min-h-screen">
    <div className="flex flex-col w-full">
      <Hero />
      <Projects />
      <Process />
      <Services />
      {/* <Testimonials /> */}
      <About />
      <Contact />
    </div>
  </main>
);

/* ── Case study layout (navbar + page + footer) ────────────────────────── */
const CaseStudyLayout = () => (
  <main className="w-full pt-20 bg-surface min-h-screen">
    <CaseStudyPage />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <SmoothCursor size={28} color="#111111" stiffness={500} damping={35} />
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyLayout />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />

      {/* Floating Parallax Social Sharing Action Button */}
      <div className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 z-50 pointer-events-none flex items-center justify-center">
        <div className="pointer-events-auto">
          <ParallaxSocialFAB
            shareText="ApexLance Studio — Engineering high-performing websites for growing businesses"
            emailSubject="ApexLance Studio — Inquiry & Collaboration"
            fabIcon="Plus"
            fabOpenOnHover={true}
            pulseEnabled={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
