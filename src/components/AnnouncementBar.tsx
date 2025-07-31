import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Download } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 border-b border-purple-500/20 py-3 mt-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          {/* GitHub Stats */}
          <motion.div
            className="flex items-center space-x-4 text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <Star size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">2.4k stars</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download size={16} className="text-green-400" />
              <span className="text-sm font-medium">15k+ downloads</span>
            </div>
          </motion.div>

          {/* Main Announcement */}
          <motion.div
            className="flex items-center space-x-3 text-white"
            animate={{ x: [-5, 0, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-purple-400" />
            </motion.div>
            <span className="text-sm md:text-base font-medium text-center">
              <span className="text-purple-400 font-bold">NEW:</span> v2.0 Released with 25+ New Commands • Enhanced Performance • Laravel 12 Support
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} className="text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;