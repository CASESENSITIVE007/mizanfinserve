"use client"
import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';

const reviews = [
  { 
    name: "James Sterling", 
    role: "CEO, TechVantage", 
    text: "MIZAN FINSERVE transformed our disorganized ledgers into a streamlined system. Their insights saved us 15% in taxes last year." ,
    stars: 5
  },
  { 
    name: "Sarah Jenkins", 
    role: "CFO, Horizon Logistics", 
    text: "The level of detail they go into during an audit is unmatched. We feel completely secure knowing MIZAN has our back." ,
    stars: 5
  },
  { 
    name: "Michael Chen", 
    role: "Founder, Apex Solutions", 
    text: "Professional, punctual, and precise. They are more than just advisors; they are strategic growth partners." ,
    stars: 5
  },
  { 
    name: "Elena Rodriguez", 
    role: "Director, Global Trade", 
    text: "Their wealth advisory reports are the gold standard. They identified vulnerabilities we didn't even know existed." ,
    stars: 5
  }
];

// Updated theme for the individual nodes
const testimonialNodes = reviews.map((r, i) => ({
  node: (
    <div key={i} className="w-[400px] bg-[#f8f9fa] p-8 rounded-none border border-gray-100 mx-4 h-full flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex gap-1 mb-4 text-[#c5a358] text-sm">
          {[...Array(r.stars)].map((_, starIndex) => (
            <span key={starIndex}>★</span>
          ))}
        </div>
        <p className="text-[#0b162c]/80 text-base italic font-serif leading-relaxed mb-6">
          "{r.text}"
        </p>
      </div>
      
      <div className="flex items-center gap-4 border-t border-gray-200 pt-5">
        <div className="w-10 h-10 bg-[#0b162c] rounded-full flex items-center justify-center text-white font-bold text-xs">
          {r.name.charAt(0)}
        </div>
        <div>
          <h5 className="text-[#0b162c] font-serif font-bold text-sm">{r.name}</h5>
          <p className="text-[#c5a358] text-[9px] font-bold uppercase tracking-widest">{r.role}</p>
        </div>
      </div>
    </div>
  )
}));

const Testimonials = () => (
  <section className="py-24  overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a358] mb-2 block">Success Stories</span>
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#0b162c] mb-4">Client Stories</h2>
      <p className="text-gray-500 max-w-lg mx-auto">Trusted by industry leaders worldwide to navigate complex financial landscapes.</p>
    </div>

    {/* The Looping Container with light theme fades */}
    <div className="relative h-[320px] w-full">
      <LogoLoop
        logos={testimonialNodes}
        speed={50}
        direction="left"
        logoHeight={100} 
        gap={20}
        hoverSpeed={5} 
        scaleOnHover={false}
        fadeOut={true}
        fadeOutColor="#ffffff" // Updated to match white section background
      />
    </div>
  </section>
);

export default Testimonials;