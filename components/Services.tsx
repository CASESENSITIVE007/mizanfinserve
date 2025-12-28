"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Briefcase, Landmark } from 'lucide-react';

const services = [
  { 
    title: "Corporate Finance", 
    icon: <Briefcase size={20}/>, 
    desc: "Strategic capital management and restructuring for businesses.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Investment Mgmt", 
    icon: <BarChart3 size={20}/>, 
    desc: "Portfolio diversification tailored to maximize your returns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Wealth Advisory", 
    icon: <Landmark size={20}/>, 
    desc: "Legacy planning and private wealth preservation strategies.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Tax Consulting", 
    icon: <Shield size={20}/>, 
    desc: "Optimizing your tax liabilities efficiently and legally.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
];

const Services = () => (
  <section className="py-24 px-8  overflow-hidden">
    <div className="max-w-7xl mx-auto relative">
      
      {/* Background Decorative Glow (Stationary) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c5a358]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 relative z-10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a358] mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#0b162c]">
            Comprehensive Financial Services
          </h2>
        </div>
        <button className="text-[#0b162c] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all border-b border-transparent hover:border-[#c5a358] pb-1">
          View All Services <span className="text-sm">›</span>
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col h-full bg-white rounded-none transition-all duration-500 hover:shadow-[0_20px_50px_rgba(197,163,88,0.15)]"
          >
            {/* The Glow Effect Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#c5a358]/20 to-transparent z-[-1]" />
            </div>

            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
              />
              {/* Overlay with subtle gold tint on hover */}
              <div className="absolute inset-0 bg-[#0b162c]/40 group-hover:bg-[#c5a358]/10 transition-colors duration-500" />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow relative bg-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#c5a358] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(197,163,88,0.5)]">
                    {service.icon}
                </span>
                <h3 className="text-lg font-serif font-medium text-[#0b162c]">
                    {service.title}
                </h3>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              
              <button className="text-[#c5a358] text-[11px] font-bold flex items-center gap-1 group/btn w-fit uppercase tracking-wider">
                Learn More 
                <span className="group-hover/btn:translate-x-1 transition-transform">›</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;