
'use client'
import { motion } from 'framer-motion';

 const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5">
    <div className="text-xl font-bold flex items-center gap-2 text-white">
      <div className="w-6 h-6 bg-blue-600 rounded-sm rotate-45" /> 
      FinAudit Pro
    </div>
    <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
      {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
        <motion.a 
          key={item} href={`#${item.toLowerCase()}`}
          whileHover={{ color: '#fff' }}
          className="transition-colors"
        >
          {item}
        </motion.a>
      ))}
    </div>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-sm shadow-lg shadow-blue-600/20"
    >
      Get Started
    </motion.button>
  </nav>
);

export default Navbar;