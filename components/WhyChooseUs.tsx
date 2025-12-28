"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { Shield, Clock, Lock, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamically import SpotlightCard to improve initial page performance
const SpotlightCard = dynamic(() => import('./SpotlightCard'), {
  ssr: false,
  loading: () => <div className="h-full min-h-[250px] border border-white/10 bg-[#11141b] rounded-2xl" />
});

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
              className="h-full" // Ensure the motion container fills the grid space
            >
              <SpotlightCard 
                className="h-full border border-white/10 bg-[#11141b] rounded-2xl overflow-hidden" 
                spotlightColor="rgba(197, 163, 88, 0.15)" // Changed to Gold glow to match Mizan brand
              >
                <div className="p-8 h-full flex flex-col group">
                  {/* Container for Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#c5a358]/10 flex items-center justify-center text-[#c5a358] mb-8 group-hover:scale-110 group-hover:bg-[#a6853f] group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  
                  {/* Feature Title */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#c5a358] transition-colors">
                    {f.title}
                  </h4>
                  
                  {/* Feature Description */}
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