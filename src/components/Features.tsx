import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Zap, 
  Rocket, 
  Shield, 
  Code, 
  Layers, 
  Database, 
  Settings,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: 'Modular Architecture',
      description: 'Service Repository Pattern with Interface-Based Design and Event-Driven Architecture',
      highlights: ['PSR-4 Compliant', 'Dependency Injection', 'Clean Code Structure'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Developer Experience',
      description: '20+ Artisan Commands with Auto-Scaffolding and Hot Module Swapping',
      highlights: ['Auto-Scaffolding', 'Hot Reloading', 'Developer-Friendly CLI'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Dynamic Module Loading with Lazy Loading and Optimized Autoloading',
      highlights: ['Lazy Loading', 'Optimized Routes', 'Caching Strategies'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Security Best Practices with Enterprise Monitoring and GDPR Compliance',
      highlights: ['Security First', 'Monitoring', 'GDPR Compliant'],
      gradient: 'from-purple-600 to-violet-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to build scalable, maintainable Laravel applications with enterprise-grade architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full" />
                      <span className="text-slate-400 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} />
                </motion.div>

                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: Code, title: 'Smart Code Generation', description: 'Automated scaffolding with best practices' },
            { icon: Database, title: 'Database Migrations', description: 'Version control for your database schema' },
            { icon: Settings, title: 'Configuration Management', description: 'Environment-specific configurations' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300"
              whileHover={{ y: -5, borderColor: 'rgba(104, 77, 244, 0.3)' }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={24} className="text-slate-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;