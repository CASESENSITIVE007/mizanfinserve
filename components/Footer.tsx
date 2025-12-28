"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0c10] border-t border-white/5 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Logo & Brand */}
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold flex items-center gap-2 text-white mb-2">
              <div className="w-5 h-5 bg-blue-600 rounded-sm rotate-45" /> 
              FinAudit Pro
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Providing precision-driven financial auditing and strategic advisory since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm">Company</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li className="hover:text-white cursor-pointer transition">About Us</li>
                <li className="hover:text-white cursor-pointer transition">Our Team</li>
                <li className="hover:text-white cursor-pointer transition">Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm">Legal</h5>
              <ul className="text-gray-500 text-sm space-y-2">
                <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition">Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} FinAudit Pro. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white text-xs flex items-center gap-2 transition"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;