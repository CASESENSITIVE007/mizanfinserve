"use client"
import React from 'react';
import { Shield, Clock, Lock, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const features = [
  { 
    icon: <Shield size={28} />, 
    title: "Certified Experts", 
    desc: "CPA & ACCA qualified team with decades of experience." 
  },
  { 
    icon: <Clock size={28} />, 
    title: "Timely Reports", 
    desc: "Never miss a filing deadline. We pride ourselves on punctuality." 
  },
  { 
    icon: <Lock size={28} />, 
    title: "Data Security", 
    desc: "Bank-grade encryption protecting your sensitive data." 
  },
  { 
    icon: <Headset size={28} />, 
    title: "24/7 Support", 
    desc: "Always here when you need us, regardless of time zones." 
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-8 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[#c5a358] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard 
                className="h-full border border-white/10 bg-[#11141b] rounded-2xl overflow-hidden" 
                spotlightColor="rgba(37, 99, 235, 0.15)" // Using a blue glow to match FinAudit
              >
                <div className="p-8 h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center text-[#c5a358] mb-8 group-hover:scale-110 group-hover:bg-[#a6853f] group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#a6853f] transition-colors">
                    {f.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;