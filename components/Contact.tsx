"use client"
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => (
  <section className="py-24 px-8 ">
    <div className="max-w-7xl mx-auto">
      
      {/* Ready to Balance CTA Section - Matching the bottom of the screenshot */}
      <div className="bg-[#0b162c] rounded-none p-12 md:p-20 text-center mb-24 relative overflow-hidden">
        {/* Subtle decorative wave or glow could go here */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6">
            Ready to Balance Your Financial Future?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Join hundreds of satisfied clients who have entrusted MIZAN FINSERVE with their wealth management needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#c5a358] text-[#0b162c] px-8 py-4 rounded-md font-bold text-sm hover:bg-[#d4b46b] transition-all">
              Schedule a Meeting
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-md font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone size={16} /> Call Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Contact Grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a358] mb-2 block">Get In Touch</span>
          <h2 className="text-4xl font-serif font-medium text-[#0b162c] mb-6">Let's Discuss Your Finances</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Our experts are ready to help you navigate complex financial landscapes with absolute integrity and strategic foresight.
          </p>
          
          <div className="grid sm:grid-cols-1 gap-4">
            {[
              { icon: <Phone size={18} />, label: "Call Us", val: "+1 (555) 123-4567" },
              { icon: <Mail size={18} />, label: "Email Us", val: "mizan@finserve.com" },
              { icon: <MapPin size={18} />, label: "Visit Us", val: "123 Financial District, Suite 400, NY 10005" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-6 bg-[#f8f9fa] border border-gray-100 group hover:border-[#c5a358]/30 transition-all">
                <div className="text-[#c5a358] group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <p className="text-[#c5a358] text-[9px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[#0b162c] font-serif font-medium">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Styled with Mizan aesthetic */}
        <div className="bg-[#f8f9fa] p-8 md:p-10 border border-gray-100">
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-[#0b162c]/60 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 p-4 text-sm text-[#0b162c] outline-none focus:border-[#c5a358] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-[#0b162c]/60 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 p-4 text-sm text-[#0b162c] outline-none focus:border-[#c5a358] transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#0b162c]/60 ml-1">Service Interest</label>
              <select className="w-full bg-white border border-gray-200 p-4 text-sm text-[#0b162c]/70 outline-none focus:border-[#c5a358] appearance-none">
                <option>Wealth Management</option>
                <option>Investment Banking</option>
                <option>Private Equity</option>
                <option>Risk Assessment</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#0b162c]/60 ml-1">Message</label>
              <textarea placeholder="How can we help you?" rows={4} className="w-full bg-white border border-gray-200 p-4 text-sm text-[#0b162c] outline-none focus:border-[#c5a358] transition-colors" />
            </div>
            <button className="w-full bg-[#0b162c] text-white font-bold py-4 rounded-none hover:bg-[#162b4d] transition-all flex items-center justify-center gap-2 group">
              Send Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;