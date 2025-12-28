"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Lock } from 'lucide-react';

const services = [
  { 
    title: "Statutory Audit", 
    icon: <Shield size={24}/>, 
    desc: "Comprehensive compliance checks ensuring your financial statements are accurate and adhere to regulations. This might have more text than others." 
  },
  { 
    title: "Tax Advisory", 
    icon: <BarChart3 size={24}/>, 
    desc: "Strategic tax planning to minimize liabilities and maximize your business's financial efficiency." 
  },
  { 
    title: "Risk Assurance", 
    icon: <Lock size={24}/>, 
    desc: "Identify and mitigate potential financial risks before they impact your bottom line. Helping you stay secure in a volatile market." 
  },
];

const Services = () => (
  <section className="py-24 px-8 bg-[#0a0c10]">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-gray-500">Comprehensive financial solutions tailored for you.</p>
        </div>
        <span className="text-[#c5a358] cursor-pointer hover:underline font-medium">See All →</span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }} // Subtle lift on hover
            className="group relative flex flex-col h-full"
          >
            {/* The Gold Glow Effect Layer */}
            <div className="absolute inset-0 bg-[#c5a358] opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500 rounded-[20px]" />

            {/* The Main Card Container */}
            <div className="relative z-10 bg-[#11141b] p-8 h-full rounded-[20px] border border-white/10 group-hover:border-[#c5a358]/50 transition-all duration-300 flex flex-col w-full shadow-2xl">
              
              {/* Visual Placeholder */}
              <div className="h-40 bg-gray-800/50 rounded-xl mb-6 overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5a358]/20 to-transparent" />
                <div className="w-full h-full bg-[#1c212c] group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#c5a358] bg-[#c5a358]/10 mb-6 group-hover:bg-[#c5a358] group-hover:text-black transition-all duration-300 flex-shrink-0 shadow-[0_0_15px_rgba(197,163,88,0.1)]">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c5a358] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              
              <button className="text-[#c5a358] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto group/btn">
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;