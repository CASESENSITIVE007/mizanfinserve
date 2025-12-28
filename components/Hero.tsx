"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LiquidEther from './LiquidEther';

const Hero = () => (
  <section className="relative w-full min-h-[85vh] flex items-center bg-[#0a0c10] overflow-hidden">
    
    {/* Liquid Background Layer */}
    <div className="absolute inset-0 z-0 opacity-60">
      <LiquidEther
        colors={[ '#1e40af', '#3b82f6', '#1e1b4b' ]} // Deep blue palette for finance
        mouseForce={25}
        cursorSize={120}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={1.8}
        takeoverDuration={0.25}
        autoResumeDelay={2000}
        autoRampDuration={1.0}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10]/20 via-transparent to-[#0a0c10]" />
    </div>

    {/* Content Layer */}
    <div className="max-w-7xl mx-auto px-8 w-full z-10 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Since 1994
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            Precision in <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Every Figure.
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-md leading-relaxed">
            Expert auditing and financial strategies to secure your business growth. 
            Navigating complex financial landscapes with absolute transparency.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
            >
              Request Audit <ArrowRight size={20} />
            </motion.button>
            
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* Optional: Right side glass element to balance the liquid background */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="hidden md:block relative h-[500px]"
        >
           <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;