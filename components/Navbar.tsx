'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, Briefcase, Info, Mail, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: <Home size={18} /> },
  { name: 'Services', href: '/services', icon: <Briefcase size={18} /> },
  { name: 'About Us', href: '/aboutus', icon: <Info size={18} /> },
  { name: 'Contact Us', href: '/contact', icon: <Mail size={18} /> }, 
];

const Navbar = () => (
  <>
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
          <Image src="/logo.jpeg" alt="Mizan Finserve Logo" fill className="object-cover" sizes="40px" priority />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold tracking-tight text-[#0b162c] leading-none uppercase">MIZAN</span>
          <span className="text-[8px] font-bold tracking-[0.3em] text-[#c5a358] uppercase">Finserve</span>
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-[13px] font-medium text-[#0b162c]/70">
        {navItems.map((item) => (
          <motion.a key={item.name} href={item.href} whileHover={{ color: '#0b162c' }} className="transition-colors cursor-pointer hover:border-b hover:border-[#c5a358] pb-1">
            {item.name}
          </motion.a>
        ))}
      </div>

      <motion.button whileHover={{ backgroundColor: '#162b4d' }} whileTap={{ scale: 0.97 }} className="bg-[#0b162c] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-md transition-all">
        Get Started <ChevronRight size={14} className="text-[#c5a358]" />
      </motion.button>
    </nav>

    <div className="md:hidden  fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-t border-gray-100 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <motion.a key={item.name} href={item.href} className="flex flex-col items-center justify-center gap-1 text-[#0b162c]/60" whileTap={{ scale: 0.9 }}>
            <span className="active:text-[#c5a358] transition-colors">{item.icon}</span>
            <span className="text-[9px] font-bold tracking-wider uppercase">{item.name === 'About Us' ? 'About' : item.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </>
);

export default Navbar;