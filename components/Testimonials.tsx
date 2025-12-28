"use client"
import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';

const reviews = [
  { 
    name: "James Sterling", 
    role: "CEO, TechVantage", 
    text: "FinAudit Pro transformed our disorganized ledgers into a streamlined system. Their insights saved us 15% in taxes last year." ,
    stars:3
  },
  { 
    name: "Sarah Jenkins", 
    role: "CFO, Horizon Logistics", 
    text: "The level of detail they go into during an audit is unmatched. We feel completely secure knowing FinAudit has our back." ,
    stars:3
  },
  { 
    name: "Michael Chen", 
    role: "Founder, Apex Solutions", 
    text: "Professional, punctual, and precise. They are more than just auditors; they are strategic growth partners." ,
    stars:4
  },
  { 
    name: "Elena Rodriguez", 
    role: "Director, Global Trade", 
    text: "Their risk assurance reports are the gold standard. They caught vulnerabilities we didn't even know existed." ,
    stars:5
  }
];

// We map the reviews array into a set of "node" elements for the LogoLoop
const testimonialNodes = reviews.map((r, i) => ({
  node: (
    <div key={i} className="w-[400px] bg-[#11141b] p-8 rounded-2xl border border-white/5 mx-4 h-full flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-4 text-blue-500 text-lg">
          {[...Array(r.stars)].map((_, starIndex) => (
            <span key={starIndex} className="">★</span>
          ))}
        </div>
        <p className="text-gray-300 text-base italic leading-relaxed mb-6">
          "{r.text}"
        </p>
      </div>
      
      <div className="flex items-center gap-4 border-t border-white/5 pt-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
          {r.name.charAt(0)}
        </div>
        <div>
          <h5 className="text-white font-bold text-sm">{r.name}</h5>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">{r.role}</p>
        </div>
      </div>
    </div>
  )
}));

const Testimonials = () => (
  <section className="py-24 bg-[#0a0c10] overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <h2 className="text-4xl font-bold text-white mb-2">Client Stories</h2>
      <p className="text-gray-500">Trusted by industry leaders worldwide.</p>
    </div>

    {/* The Looping Container */}
    <div className="relative h-[300px] w-full">
      <LogoLoop
        logos={testimonialNodes}
        speed={60} // Adjusted speed for readability
        direction="left"
        logoHeight={100} // Height of your testimonial cards
        gap={20}
        hoverSpeed={10} // Slows down when the user hovers to read
        scaleOnHover={false}
        fadeOut={true}
        fadeOutColor="#0a0c10" // Matches section background
      />
    </div>
  </section>
);

export default Testimonials;