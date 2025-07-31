import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock, MemoryStick } from 'lucide-react';

const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: TrendingUp,
      value: 37,
      suffix: '%',
      label: 'Faster Boot Time',
      description: 'Optimized module loading reduces application startup time',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: MemoryStick,
      value: 29,
      suffix: '%',
      label: 'Less Memory Usage',
      description: 'Efficient memory management with lazy loading',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Zap,
      value: 70,
      suffix: '%',
      label: 'Faster Route Registration',
      description: 'Dynamic route caching and optimization',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Clock,
      value: 58,
      suffix: '%',
      label: 'Faster Asset Loading',
      description: 'Optimized asset bundling and compression',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const Counter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, isVisible]);

    return (
      <span>
        {count}
        <span className="text-slate-400">{suffix}</span>
      </span>
    );
  };

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blazing Fast{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Optimized for speed and efficiency with measurable performance improvements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 text-center"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${metric.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <metric.icon size={32} className="text-white" />
                </motion.div>

                {/* Value */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Counter value={metric.value} suffix={metric.suffix} isVisible={isVisible} />
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-4">{metric.label}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{metric.description}</p>

                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Chart */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/30">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Performance Comparison
            </h3>
            
            <div className="space-y-6">
              {[
                { label: 'Application Boot Time', standard: 2.4, optimized: 1.5, unit: 's' },
                { label: 'Memory Usage', standard: 85, optimized: 60, unit: 'MB' },
                { label: 'Route Registration', standard: 180, optimized: 54, unit: 'ms' },
                { label: 'Asset Loading', standard: 3.2, optimized: 1.3, unit: 's' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{item.label}</span>
                    <div className="flex space-x-4 text-sm">
                      <span className="text-slate-400">Standard: {item.standard}{item.unit}</span>
                      <span className="text-green-400 font-medium">Optimized: {item.optimized}{item.unit}</span>
                    </div>
                  </div>
                  
                  <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-slate-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.standard / Math.max(item.standard, item.optimized)) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.optimized / Math.max(item.standard, item.optimized)) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;