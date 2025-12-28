"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Lock } from 'lucide-react';

// Dynamically import the heavy animation component
const ElectricBorder = dynamic(() => import('./ElectricBorder'), {
  ssr: false,
  loading: () => <div className="w-full h-full rounded-[20px] border border-white/5 bg-[#11141b]" />
});

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
            className="flex flex-col h-full"
          >
            <ElectricBorder
              className="flex flex-grow"
              color="#c5a358"
              speed={1.2} // Reduced slightly for better mobile performance
              chaos={0.2} // Reduced slightly to save CPU cycles
              thickness={2}
              style={{ borderRadius: 20, height: '100%', width: '100%' }}
            >
              <div className="bg-[#11141b] p-8 h-full rounded-[20px] group flex flex-col w-full">
                {/* Visual Placeholder */}
                <div className="h-40 bg-gray-800/50 rounded-xl mb-6 overflow-hidden relative flex-shrink-0">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#c5a358]/10 to-transparent" />
                   <div className="w-full h-full bg-[#1c212c] group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#c5a358] bg-[#c5a358]/10 mb-6 group-hover:bg-[#c5a358] group-hover:text-black transition-colors duration-300 flex-shrink-0">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <button className="text-[#c5a358] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Learn More <span>→</span>
                </button>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;