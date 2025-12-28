"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { Shield, BarChart3, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Using SpotlightCard with a lighter, subtle theme for the white background
const SpotlightCard = dynamic(() => import('./SpotlightCard'), {
  ssr: false,
  loading: () => <div className="h-full min-h-[250px] border border-gray-100 bg-white rounded-xl" />
});

const features = [
  { 
    icon: <Shield size={20} />, 
    title: "Secure & Compliant", 
    desc: "Your assets are safeguarded by top-tier security protocols and full regulatory compliance." 
  },
  { 
    icon: <Zap size={20} />, 
    title: "Data-Driven Growth", 
    desc: "We leverage advanced analytics to identify opportunities tailored to your risk profile." 
  },
  { 
    icon: <Users size={20} />, 
    title: "Personalized Advisory", 
    desc: "Our experts work closely with you to craft a financial roadmap unique to your life goals." 
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Centered per MIZAN screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-medium text-[#0b162c] mb-6">
            Why Choose MIZAN?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We bring clarity to complex financial landscapes, ensuring your wealth is managed with the utmost integrity and strategic foresight.
          </p>
        </motion.div>

        {/* 3-Column Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <SpotlightCard 
                className="h-full border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300" 
                spotlightColor="rgba(16, 22, 44, 0.5)" 
              >
                <div className="p-10 h-full flex flex-col group">
                  {/* Small Square Icon Box */}
                  <div className="w-10 h-10 rounded-md bg-[#0b162c] flex items-center justify-center text-white mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                    {f.icon}
                  </div>
                  
                  {/* Feature Title - Serif */}
                  <h4 className="text-lg font-serif font-medium text-[#0b162c] mb-4">
                    {f.title}
                  </h4>
                  
                  {/* Feature Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
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