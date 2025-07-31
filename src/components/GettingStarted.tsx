import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Rocket, CheckCircle } from 'lucide-react';

const GettingStarted = () => {
  const steps = [
    {
      icon: Download,
      title: 'Install the Package',
      description: 'Add Laravel Core Module to your project via Composer',
      code: 'composer require rcv/core',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Create Your First Module',
      description: 'Generate a complete module structure with one command',
      code: 'php artisan module:make UserManagement',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Generate Components',
      description: 'Auto-scaffold controllers, models, and services',
      code: 'php artisan module:make-controller UserController UserManagement --resource',
      color: 'from-purple-600 to-violet-600'
    },
    {
      icon: CheckCircle,
      title: 'Deploy and Scale',
      description: 'Your modular architecture is ready for production',
      code: 'php artisan serve',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your Laravel development workflow in minutes with our intuitive setup process
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-1/2 top-12 w-0.5 h-20 bg-gradient-to-b from-slate-600 to-transparent transform -translate-x-1/2"
                  initial={{ height: 0 }}
                  whileInView={{ height: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                />
              )}

              {/* Content Card */}
              <motion.div
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <motion.div
                  className={`w-full max-w-md bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/30 ${
                    index % 2 === 0 ? 'mr-6' : 'ml-6'
                  }`}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                    borderColor: 'rgba(239, 68, 68, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>

                  {/* Code */}
                  <motion.div
                    className="bg-slate-900/80 rounded-xl p-4 font-mono text-sm"
                    whileHover={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <code className="text-green-400">
                      <span className="text-slate-500">$ </span>
                      {step.code}
                    </code>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center space-x-3"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(104, 77, 244, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} />
            <span>Start Building Now</span>
          </motion.button>
          
          <p className="text-slate-400 mt-4">
            Join 1000+ developers already using Laravel Core Module
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;