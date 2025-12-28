"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Dynamically import the heavy background component
const LiquidEther = dynamic(() => import('./LiquidEther'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0b2149]" /> 
});

const Hero = () => (
  <section className="relative w-full min-h-[90vh] flex items-center bg-[#0b2149] overflow-hidden">
    
    {/* Liquid Background Layer - Theme Adjusted */}
    <div className="absolute inset-0 z-0 opacity-40">
      <LiquidEther
        colors={[ '#0b2149', '#c5a358', '#162b4d' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={24}
        iterationsPoisson={24}
        resolution={0.4}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={1.8}
        takeoverDuration={0.25}
        autoResumeDelay={2000}
        autoRampDuration={1.0}
      />
      {/* Wave bottom overlay to match image design */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b2149]/80" />
    </div>

    {/* Content Layer */}
    <div className="max-w-7xl mx-auto px-8 w-full z-10 relative py-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-[10px] font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a358]" />
            Trusted Financial Partner
          </motion.div>

          {/* Mizan Serif Typography */}
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1] tracking-tight">
            Precision in Every <br /> 
            <span className="text-[#c5a358]">
              Financial Move
            </span>
          </h1>

          <p className="mt-6 text-gray-300/80 text-base max-w-md leading-relaxed">
            MIZAN FINSERVE provides expert financial solutions tailored to empower your wealth journey. From investment strategies to corporate advisory, we balance your ambitions with solid results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#d4b46b' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#c5a358] text-[#0b2149] px-7 py-3.5 rounded-md font-bold text-sm transition-all"
            >
              Book Consultation
            </motion.button>
            
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-7 py-3.5 rounded-md font-bold text-sm transition-all"
            >
              Explore Services
            </motion.button>
          </div>

          {/* Added Stats to match image theme */}
          <div className="mt-12 flex gap-10 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-serif text-white">500+</div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-white">$200M</div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Assets Managed</div>
            </div>
          </div>
        </motion.div>

        {/* Right side Image area with Consistent Growth card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="hidden md:block relative h-[550px]"
        >
           {/* Main Image Frame */}
           <div className="absolute inset-0 rounded-2xl border-[10px] border-white/5 overflow-hidden shadow-2xl">
              <img
  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  alt="Financial Advisor"
  className="w-full h-full object-cover"
/>
           </div>

           {/* Floating Growth Card */}
           <div className="absolute bottom-8 -left-8 bg-[#0b2149]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 rounded-full bg-[#c5a358] flex items-center justify-center">
                <ArrowRight className="text-white -rotate-45" size={16} />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Consistent Growth</p>
                <p className="text-white/50 text-[10px]">Year over Year</p>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;