import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
import PerformanceMetrics from './components/PerformanceMetrics';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-slate-900 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <AnnouncementBar />
      <Hero />
      <SocialProof />
      <Features />
      <CodeDemo />
      <PerformanceMetrics />
      <GettingStarted />
      <Footer />
    </motion.div>
  );
}

export default App;