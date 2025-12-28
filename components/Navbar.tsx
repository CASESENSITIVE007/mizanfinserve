'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'; // If using Next.js, otherwise use <img />

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5">
    {/* Logo Section */}
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold-500/30">
        <img 
          src="/logo.jpeg" // Replace with your actual file path
          alt="Mizan Finserve Logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white leading-none">
          MIZAN
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-[#c5a358] uppercase">
          Finserve
        </span>
      </div>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
      {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
        <motion.a 
          key={item} 
          href={`#${item.toLowerCase().replace(' ', '')}`}
          whileHover={{ color: '#c5a358' }} // Hover color changed to match logo gold
          className="transition-colors cursor-pointer"
        >
          {item}
        </motion.a>
      ))}
    </div>

    {/* CTA Button */}
    <motion.button 
      whileHover={{ scale: 1.05, backgroundColor: '#b08d44' }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#c5a358] text-black px-6 py-2 rounded-md font-bold text-sm shadow-lg shadow-gold-600/20"
    >
      Get Started
    </motion.button>
  </nav>
);

export default Navbar;