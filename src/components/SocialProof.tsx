import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const companies = ['TechCorp', 'InnovateLab', 'DevSolutions', 'CloudSync', 'DataFlow', 'NextGen'];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              1000+ Developers
            </span>{' '}
            Worldwide
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[
              { icon: Users, value: '1000+', label: 'Active Developers' },
              { icon: Star, value: '4.9/5', label: 'Rating' },
              { icon: TrendingUp, value: '40%', label: 'Faster Development' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon size={24} className="text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              className="flex items-center justify-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(239, 68, 68, 0.3)' }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(104, 77, 244, 0.3)' }}
            >
              <span className="text-slate-400 font-medium">{company}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700/30"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(239, 68, 68, 0.1)",
              boxShadow: "0 25px 50px rgba(104, 77, 244, 0.1)",
              borderColor: 'rgba(104, 77, 244, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RT</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed">
                  "Core Module transformed our development process. We reduced our time-to-market by{' '}
                  <span className="text-purple-400 font-bold">40%</span> and our code quality improved dramatically."
                </p>
                <div className="text-slate-400">
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm">CTO, RCV Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;