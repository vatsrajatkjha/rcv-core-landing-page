import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, BookOpen, Zap, Shield, Code } from 'lucide-react';

const Hero = () => {
  const floatingElements = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingElements.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23334155%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Enterprise
            </span>
            <br />
            Laravel Apps with{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Modular Architecture
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionary modular development framework trusted by leading organizations worldwide
          </motion.p>

          {/* Key Statistics */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Code, text: '20+ Artisan Commands' },
              { icon: Zap, text: '37% Faster Development' },
              { icon: Shield, text: 'Service Repository Pattern' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-slate-300"
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon size={20} className="text-red-400" />
                <span className="font-medium">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(104, 77, 244, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <motion.button
              className="group border-2 border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={20} />
              <span>View Documentation</span>
            </motion.button>
          </motion.div>

          {/* Floating Code Snippet */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div
              className="inline-block bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 text-left"
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-slate-400 text-sm mb-2">Quick Start</div>
              <div className="font-mono text-green-400">
                <div className="text-slate-400">$</div>
                <span className="text-blue-400">composer require</span>
                <span className="text-white"> rcv/core</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;