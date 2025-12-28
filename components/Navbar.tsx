'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, Briefcase, Info, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: <Home size={20} /> },
  { name: 'Services', href: '#services', icon: <Briefcase size={20} /> },
  { name: 'About Us', href: '#aboutus', icon: <Info size={20} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
];

const Navbar = () => (
  <>
    {/* --- TOP NAVBAR --- */}
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        {/* Logo Container */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-[#c5a358]/30">
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
          <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none uppercase">
            MIZAN
          </span>
          <span className="text-[8px] md:text-[10px] font-medium tracking-[0.2em] text-[#c5a358] uppercase">
            Finserve
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
        {navItems.map((item) => (
          <motion.a 
            key={item.name} 
            href={item.href}
            whileHover={{ color: '#c5a358' }}
            className="transition-colors cursor-pointer"
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button 
        whileHover={{ scale: 1.05, backgroundColor: '#b08d44' }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#c5a358] text-black px-4 md:px-6 py-2 rounded-md font-bold text-xs md:text-sm shadow-lg shadow-[#c5a358]/20"
      >
        Get Started
      </motion.button>
    </nav>

    {/* --- MOBILE BOTTOM TAB BAR --- */}
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0a0c10]/90 backdrop-blur-lg border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
            whileTap={{ scale: 0.9 }}
          >
            <span className="hover:text-[#c5a358] transition-colors">{item.icon}</span>
            <span className="text-[10px] font-medium tracking-wide uppercase">
              {item.name === 'About Us' ? 'About' : item.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </>
);

export default Navbar;