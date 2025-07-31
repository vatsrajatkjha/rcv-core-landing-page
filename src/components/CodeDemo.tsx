import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal, Play } from 'lucide-react';

const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [typingIndex, setTypingIndex] = useState(0);

  const codeExamples = [
    {
      title: 'Installation',
      language: 'bash',
      code: `# 📦 Install via Composer
composer require rcv/core

# 🎯 Publish configuration
php artisan vendor:publish --provider="RCV\\Core\\CoreServiceProvider"

# 🚀 Initialize your first module
php artisan module:init`
    },
    {
      title: 'Create Module',
      language: 'bash',
      code: `# 🏗️ Create a new module
php artisan module:make UserManagement

# 📝 Generate controller with resources
php artisan module:make-controller UserController UserManagement --resource

# 🗄️ Create model with migration
php artisan module:make-model User UserManagement --migration`
    },
    {
      title: 'Module Structure',
      language: 'php',
      code: `<?php
// app/Modules/UserManagement/Controllers/UserController.php

namespace App\\Modules\\UserManagement\\Controllers;

use App\\Modules\\UserManagement\\Services\\UserService;
use App\\Modules\\UserManagement\\Requests\\CreateUserRequest;

class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}

    public function store(CreateUserRequest $request)
    {
        return $this->userService->create($request->validated());
    }
}`
    }
  ];

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % codeExamples[activeTab].code.length);
    }, 50);

    return () => clearInterval(interval);
  }, [activeTab, codeExamples]);

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
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Simple commands to scaffold your entire application architecture
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center mb-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {codeExamples.map((example, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {example.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Code Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="relative bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-700/50 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)" }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/30">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Terminal size={16} />
                    <span className="text-sm font-medium">{codeExamples[activeTab].title}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700/50"
                    onClick={() => copyToClipboard(codeExamples[activeTab].code, activeTab)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {copiedIndex === activeTab ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </motion.button>
                  <motion.button
                    className="p-2 text-slate-400 hover:text-green-400 transition-colors rounded-lg hover:bg-slate-700/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6">
                <pre className="text-sm md:text-base font-mono leading-relaxed overflow-x-auto">
                  <code className="text-slate-300">
                    {codeExamples[activeTab].code.split('\n').map((line, lineIndex) => (
                      <motion.div
                        key={lineIndex}
                        className="min-h-[1.5em]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: lineIndex * 0.05 }}
                      >
                        {line.startsWith('#') ? (
                          <span className="text-slate-500">{line}</span>
                        ) : line.includes('composer') || line.includes('php artisan') ? (
                          <>
                            <span className="text-green-400">$ </span>
                            <span className="text-blue-400">{line.split(' ')[0]}</span>
                            <span className="text-white">{line.substring(line.indexOf(' '))}</span>
                          </>
                        ) : line.includes('<?php') ? (
                          <span className="text-purple-400">{line}</span>
                        ) : line.includes('namespace') || line.includes('use') ? (
                          <span className="text-blue-400">{line}</span>
                        ) : line.includes('class') || line.includes('public function') ? (
                          <span className="text-yellow-400">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </motion.div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Animated Cursor */}
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-5 bg-purple-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: '3', suffix: ' min', label: 'Setup Time' },
            { number: '20', suffix: '+', label: 'Available Commands' },
            { number: '100', suffix: '%', label: 'Type Safe' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/20"
              whileHover={{ y: -5, borderColor: 'rgba(239, 68, 68, 0.3)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <span className="text-slate-400">{stat.suffix}</span>
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodeDemo;