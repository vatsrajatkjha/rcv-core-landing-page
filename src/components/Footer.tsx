import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  BookOpen, 
  Code, 
  Users, 
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs', icon: BookOpen },
      { name: 'API Reference', href: '#api', icon: Code },
      { name: 'Tutorials', href: '#tutorials', icon: BookOpen },
      { name: 'Examples', href: '#examples', icon: Github }
    ],
    community: [
      { name: 'Discord', href: '#discord', icon: Users },
      { name: 'GitHub', href: '#github', icon: Github },
      { name: 'Twitter', href: '#twitter', icon: Twitter },
      { name: 'LinkedIn', href: '#linkedin', icon: Linkedin }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'License', href: '#license' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LC</span>
              </div>
              <span className="text-white font-bold text-2xl">Laravel Core</span>
            </div>
            
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              Revolutionary modular development framework that transforms how you build Laravel applications. 
              Trusted by leading organizations worldwide.
            </p>

            <div className="flex items-center space-x-2 text-slate-400 mb-6">
              <Mail size={16} />
              <a 
                href="mailto:support@rcvtechnologies.com" 
                className="hover:text-white transition-colors"
              >
                support@rcvtechnologies.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    {link.icon && <link.icon size={16} className="group-hover:text-purple-400 transition-colors" />}
                    <span>{link.name}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Community</h3>
            <ul className="space-y-4">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <link.icon size={16} className="group-hover:text-purple-400 transition-colors" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-slate-700/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Get the latest updates, tutorials, and best practices delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>© 2025 RCV Technologies. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-purple-500 fill-current" />
            </motion.div>
            <span>for developers</span>
          </div>
          
          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <span>v2.0.1</span>
            <span>•</span>
            <span>Laravel 12 Ready</span>
            <span>•</span>
            <span>PHP 8.3+</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;