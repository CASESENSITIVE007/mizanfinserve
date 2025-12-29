"use client";

import React from 'react';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] text-[#111418] dark:text-white font-sans overflow-x-hidden min-h-screen">
      {/* Import Material Symbols for the icons used below */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />

      {/* Hero Section */}
      <section className="relative w-full px-4 lg:px-40 py-10 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="relative flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center overflow-hidden shadow-2xl"
               style={{ 
                 backgroundImage: `linear-gradient(rgba(17, 25, 33, 0.7) 0%, rgba(25, 127, 230, 0.6) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")` 
               }}>
            <div className="relative z-10 flex flex-col gap-3">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-white/90 text-sm font-normal leading-normal md:text-lg max-w-xl mx-auto">
                We are here to answer your questions and guide you towards a secure financial future.
              </p>
            </div>
            {/* Gold accent decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Split Layout */}
      <section className="flex justify-center w-full px-4 lg:px-40 pb-16 pt-8">
        <div className="flex flex-col lg:flex-row gap-12 max-w-[1200px] w-full">
          
          {/* Left Column: Contact Information */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4">Contact Information</h2>
              <p className="text-[#637588] dark:text-gray-400 text-base leading-relaxed">
                Our team of experts is ready to assist you with personalized financial advice. Reach out to us via phone, email, or visit our headquarters.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-[#dce0e5] dark:hover:border-gray-700 transition-colors group">
                <div className="flex items-center justify-center size-12 rounded-full bg-[#197fe6]/10 text-[#197fe6] shrink-0 group-hover:bg-[#197fe6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#637588] dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Address</p>
                  <p className="text-lg font-medium leading-normal">
                    123 Financial District, Suite 400<br/>New York, NY 10005
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-[#dce0e5] dark:hover:border-gray-700 transition-colors group">
                <div className="flex items-center justify-center size-12 rounded-full bg-[#197fe6]/10 text-[#197fe6] shrink-0 group-hover:bg-[#197fe6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#637588] dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-lg font-medium leading-normal">+1 (555) 123-4567</p>
                  <p className="text-sm text-[#C5A059]">Mon-Fri, 9am - 5pm EST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-[#dce0e5] dark:hover:border-gray-700 transition-colors group">
                <div className="flex items-center justify-center size-12 rounded-full bg-[#197fe6]/10 text-[#197fe6] shrink-0 group-hover:bg-[#197fe6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#637588] dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Email</p>
                  <p className="text-lg font-medium leading-normal">support@mizanfinserve.com</p>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="bg-[#f6f7f8] dark:bg-[#1a2632] p-6 rounded-xl border border-[#dce0e5] dark:border-gray-700 mt-auto">
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined text-[#C5A059] text-3xl">help</span>
                <div>
                  <h4 className="font-bold">Need quick answers?</h4>
                  <p className="text-sm text-[#637588] dark:text-gray-400 mt-1">Check our Help Center for frequently asked questions about our services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 bg-white dark:bg-[#1a2632] rounded-2xl shadow-xl border border-[#dce0e5] dark:border-gray-700 p-6 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#197fe6]"></div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium">First Name</label>
                  <input className="h-12 w-full rounded-lg border border-[#dce0e5] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#111921] px-4 text-sm focus:border-[#197fe6] focus:ring-1 focus:ring-[#197fe6] outline-none transition-all" placeholder="John" type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium">Last Name</label>
                  <input className="h-12 w-full rounded-lg border border-[#dce0e5] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#111921] px-4 text-sm focus:border-[#197fe6] focus:ring-1 focus:ring-[#197fe6] outline-none transition-all" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email Address</label>
                <input className="h-12 w-full rounded-lg border border-[#dce0e5] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#111921] px-4 text-sm focus:border-[#197fe6] focus:ring-1 focus:ring-[#197fe6] outline-none transition-all" placeholder="john@example.com" type="email" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Subject</label>
                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-lg border border-[#dce0e5] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#111921] px-4 text-sm focus:border-[#197fe6] focus:ring-1 focus:ring-[#197fe6] outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Wealth Management</option>
                    <option>Investment Advisory</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#637588]">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Message</label>
                <textarea className="min-h-[140px] w-full resize-y rounded-lg border border-[#dce0e5] dark:border-gray-600 bg-[#f6f7f8] dark:bg-[#111921] p-4 text-sm focus:border-[#197fe6] focus:ring-1 focus:ring-[#197fe6] outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="mt-2 w-full rounded-lg bg-[#197fe6] hover:bg-blue-600 text-white h-12 text-base font-bold shadow-md transition-all">
                Send Message
              </button>
              <p className="text-xs text-center text-[#637588] mt-2">
                By submitting this form, you agree to our privacy policy. Your information is secure.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative bg-gray-200 border-t border-[#dce0e5] dark:border-gray-800">
        <div className="absolute inset-0 bg-cover bg-center grayscale contrast-[0.9]" 
             style={{ backgroundImage: `url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066")` }}>
        </div>
        <div className="absolute inset-0 bg-[#197fe6]/10 mix-blend-multiply"></div>
        
        {/* Location Card Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:left-20 md:top-20 bg-white dark:bg-[#1a2632] p-5 rounded-xl shadow-2xl max-w-sm border-l-4 border-[#C5A059]">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[#197fe6]">business</span>
            Mizan Finserve HQ
          </h3>
          <p className="text-[#637588] dark:text-gray-400 text-sm mt-2 leading-relaxed">
            Located in the heart of the Financial District, serving clients globally with premium financial solutions.
          </p>
          <button className="mt-4 w-full h-9 rounded bg-[#197fe6]/10 text-[#197fe6] text-sm font-bold flex items-center justify-center hover:bg-[#197fe6]/20 transition-colors">
            Get Directions
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;