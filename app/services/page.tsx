"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TrendingUp, FileText, Umbrella, Briefcase, Shield, Users, ArrowRight, Phone } from 'lucide-react';

// --- Components ---

const ServiceCard = ({ icon: IconComponent, title, description }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative  dark:bg-[#161e29] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 overflow-hidden h-full flex flex-col"
    >
      {/* Dynamic Glowing Background (Desktop Only recommended, handled via opacity) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(25, 127, 230, 0.12), transparent 40%)`
          ),
        }}
      />

      {/* Decorative Icon Background */}
      <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
        <IconComponent size={120} className="text-[#197fe6]" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="size-12 md:size-14 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-[#197fe6] transition-all duration-300 shadow-sm">
          <IconComponent size={28} className="text-[#197fe6] group-hover:text-white transition-colors" strokeWidth={2} />
        </div>
        
        <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#197fe6] transition-colors">
          {title}
        </h4>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <a href="#" className="inline-flex items-center text-xs md:text-sm font-black text-[#197fe6] uppercase tracking-wider hover:gap-3 transition-all">
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const StatItem = ({ value, label, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col items-center justify-center text-center py-6 px-4 ${!isLast ? 'border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800' : ''}`}
  >
    <span className="text-3xl md:text-5xl font-black text-[#197fe6] mb-1">{value}</span>
    <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em]">{label}</span>
  </motion.div>
);

// --- Main Page ---

export default function ServicesPage() {
  const services = [
    { icon: TrendingUp, title: "Investment Management", description: "Strategic portfolio construction and active management designed to maximize returns while adhering to your specific risk tolerance." },
    { icon: FileText, title: "Tax Planning", description: "Proactive tax strategies integrated with your investment plan to minimize liabilities and enhance your effective after-tax returns." },
    { icon: Umbrella, title: "Retirement Strategies", description: "Comprehensive roadmaps to ensure financial independence, focusing on accumulation and longevity protection." },
    { icon: Briefcase, title: "Corporate Finance", description: "Expert advice on capital raising, mergers and acquisitions, and treasury management to drive business growth." },
    { icon: Shield, title: "Risk Management", description: "Tailored insurance and hedging strategies to protect your personal and business assets from unforeseen events." },
    { icon: Users, title: "Estate Planning", description: "Structuring the transfer of wealth to future generations and charitable causes efficiently and according to your wishes." },
  ];

  return (
    <div className=" dark:bg-[#111921] min-h-screen font-sans selection:bg-[#197fe6] selection:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] mt-20 md:h-[75vh] flex items-center justify-center bg-slate-900 overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Stability"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/90 to-slate-900" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Elite Financial Solutions<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197fe6] via-blue-400 to-[#197fe6] bg-[length:200%_auto] animate-gradient">
                For Your Prosperity
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover premium financial services designed to preserve your wealth, minimize risk, and secure a legacy.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-[#197fe6] text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/25">
              Get Started
            </button>
            <button className="h-12 md:h-14 px-8 md:px-10 rounded-full border border-slate-600 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors backdrop-blur-md">
              View Pricing
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20  md:-mt-16 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-[#0f172a] shadow-2xl rounded-2xl md:rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <StatItem value="25+" label="Years Experience" />
            <StatItem value="$500M+" label="Assets Managed" />
            <StatItem value="1,200+" label="Happy Clients" />
            <StatItem value="50+" label="Expert Advisors" isLast />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#197fe6] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Comprehensive Wealth Management
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
              We combine personalized strategy with institutional-grade investment capabilities.
            </p>
          </div>

          <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
   <section className="py-16 md:py-32 px-4  dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">
      Ready to Secure Your <br className="md:hidden" /> Financial Future?
    </h2>
    <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
      Schedule a consultation with one of our certified advisors today.
    </p>
    
    {/* Updated Button Container: Only Contact Us */}
    <div className="flex justify-center">
      <button className="h-12 md:h-14 px-10 rounded-xl bg-[#197fe6] text-white font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-500/40 transition-all active:scale-95 shadow-lg">
        <Phone size={20} />
        Contact Us
      </button>
    </div>
  </motion.div>
</section>

      {/* Global CSS for the shimmer effect on text */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}