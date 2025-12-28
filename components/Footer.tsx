"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b162c] pt-20 pb-8 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#c5a358]/10 border border-[#c5a358]/30">
                 <Image 
                    src="/logo.jpeg" 
                    alt="Mizan Finserve Logo"
                    fill 
                    className="object-cover"
                    sizes="40px"
                    priority 
                 />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold tracking-tight text-white leading-none">
                  MIZAN
                </span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-[#c5a358] uppercase">
                  Finserve
                </span>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Providing superior financial services tailored to your unique needs. Trust, integrity, and Excellence.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -2 }} href="#" className="text-white/40 hover:text-white"><Linkedin size={16}/></motion.a>
              <motion.a whileHover={{ y: -2 }} href="#" className="text-white/40 hover:text-white"><Twitter size={16}/></motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-serif font-medium mb-6 text-sm">Quick Links</h5>
            <ul className="text-white/40 text-xs space-y-4 font-medium">
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Our Services</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Insights & News</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-serif font-medium mb-6 text-sm">Services</h5>
            <ul className="text-white/40 text-xs space-y-4 font-medium">
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Wealth Management</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Investment Banking</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Private Equity</li>
              <li className="hover:text-[#c5a358] cursor-pointer transition-colors">Risk Assessment</li>
            </ul>
          </div>

          {/* Contact Info - Matching the right column of screenshot */}
          <div>
            <h5 className="text-white font-serif font-medium mb-6 text-sm">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/40 text-xs group">
                <MapPin size={14} className="text-[#c5a358] shrink-0" />
                <span>123 Financial District, Suite 400<br/>New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-xs">
                <Phone size={14} className="text-[#c5a358] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-xs">
                <Mail size={14} className="text-[#c5a358] shrink-0" />
                <span>mizan@finserve.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] tracking-wide">
            © {currentYear} MIZAN FINSERVE. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-[10px] text-white/30">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ color: '#c5a358' }}
              className="flex items-center gap-1 font-bold text-white/50"
            >
              TOP ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;