"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, HelpCircle, Send, ArrowRight } from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { 
      icon: MapPin, 
      label: 'Address', 
      val: '123 Financial District, Suite 400',
      val2: 'New York, NY 10005',
      sub: 'Our headquarters' 
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      val: '+1 (555) 123-4567', 
      sub: 'Mon-Fri, 9am - 5pm EST' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      val: 'support@mizanfinserve.com', 
      sub: 'For general inquiries' 
    }
  ];

  return (
    <main className="bg-white dark:bg-[#0a0e27] mt-20 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-r from-blue-900/90 via-slate-900/85 to-slate-900/90" />

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Get in <span className="text-cyan-300">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We're here to answer your questions and guide you towards a secure financial future.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Our team of experts is ready to assist you with personalized financial advice. Reach out via phone, email, or visit our headquarters.
              </motion.p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-5 p-6 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 shrink-0 mt-1">
                      <IconComponent size={24} className="stroke-2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-gray-900 dark:text-white font-semibold text-base">{item.val}</p>
                      {item.val2 && <p className="text-gray-900 dark:text-white font-semibold text-base">{item.val2}</p>}
                      {item.sub && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.sub}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Help Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Need quick answers?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Check our Help Center for FAQs about our services and solutions.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>General Inquiry</option>
                  <option>Wealth Management</option>
                  <option>Investment Advisory</option>
                  <option>Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSubmitting(true)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>
              
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
                By submitting this form, you agree to our privacy policy. Your information is encrypted and secure.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00901212342551!3d40.71005857139265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1765355555%3A0xc02923053359560a!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        />
        
        {/* Floating Location Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-4 md:left-12 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl max-w-sm border-l-4 border-blue-600"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <MapPin size={20} className="text-blue-600" />
            Mizan Finserve HQ
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            Located in the heart of the Financial District, serving clients globally with premium financial solutions.
          </p>
          <button className="w-full py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex items-center justify-center gap-2">
            Get Directions
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}