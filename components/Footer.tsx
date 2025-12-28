"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0c10] border-t border-white/5 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          
          {/* Logo & Brand Section */}
          <div className="mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#c5a358]/30">
                 <Image 
                           src="/logo.jpeg" 
                           alt="Mizan Finserve Logo"
                           fill // Fills the parent container
                           className="object-cover"
                           sizes="(max-width: 768px) 40px, 48px" // Tells Next.js the size to optimize for
                           priority // Loads this image immediately (critical for LCP)
                         />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  MIZAN
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-[#c5a358] uppercase">
                  Finserve
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Empowering your financial future through precision-driven auditing and strategic advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-12 md:gap-20">
            <div>
              <h5 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h5>
              <ul className="text-gray-500 text-sm space-y-3">
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Our Team</li>
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Services</li>
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h5>
              <ul className="text-gray-500 text-sm space-y-3">
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Cookies Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] tracking-wide">
            © {currentYear} MIZAN FINSERVE. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, color: '#c5a358' }}
            className="text-gray-400 text-xs flex items-center gap-2 font-medium transition-all"
          >
            Back to top 
            <span className="text-[#c5a358]">↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;