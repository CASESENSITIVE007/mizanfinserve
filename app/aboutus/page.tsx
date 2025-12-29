"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Handshake, Award, User } from 'lucide-react';

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
      staggerChildren: 0.2
    }
  }
};

export default function AboutUs() {
  return (
    <main className="bg-[#f6f7f8] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111921]/70 to-[#111921]/50 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Corporate skyscraper"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 max-w-[800px] space-y-4"
        >
          <span className="text-[#C5A059] text-sm font-bold tracking-widest uppercase block">Since 2010</span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Empowering Your <br/> Financial Future
          </h1>
          <p className="text-gray-200 text-lg max-w-[600px] mx-auto">
            We are Mizan Finserve. A legacy of trust, integrity, and innovation in global financial management, dedicated to your prosperity.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-[#111418] text-3xl md:text-4xl font-bold">Driven by Purpose</h2>
            <p className="text-[#637588] text-lg max-w-2xl mx-auto">
              At Mizan Finserve, we don't just manage wealth; we nurture it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-[#f6f7f8] border border-gray-100 relative group"
            >
              <h3 className="text-[#111418] text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#637588] leading-relaxed relative z-10">
                To provide accessible, transparent, and superior financial solutions tailored to individual and corporate needs.
              </p>
              <span className="absolute top-4 right-4 text-8xl opacity-5 text-[#197fe6] font-bold select-none pointer-events-none">MISSION</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-[#111921] text-white relative group"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                To be the leading global partner in wealth generation, fostering financial security for generations to come.
              </p>
              <span className="absolute top-4 right-4 text-8xl opacity-5 text-[#C5A059] font-bold select-none pointer-events-none">VISION</span>
            </motion.div>
          </div>
        </div>
      </section>

 {/* Core Values Section */}
<section className="py-12 md:py-20 px-4 bg-[#f6f7f8]">
  <div className="max-w-6xl mx-auto">
    {/* Header: Centered on mobile, spread on desktop */}
    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-4 text-center md:text-left">
      <div>
        <span className="text-[#197fe6] font-bold uppercase text-xs md:text-sm tracking-wider">
          Our Philosophy
        </span>
        <h2 className="text-[#111418] text-3xl md:text-4xl font-bold mt-1">
          Core Values
        </h2>
      </div>
      <button className="text-[#197fe6] font-bold text-sm hover:underline transition-all flex items-center gap-1 group">
        View Corporate Responsibility 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>

    {/* Responsive Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {[
        { 
          title: 'Integrity', 
          desc: 'Upholding the highest standards of honesty and strong moral principles in every transaction.', 
          color: 'border-[#197fe6]',
          icon: Shield
        },
        { 
          title: 'Innovation', 
          desc: 'Constantly seeking new methodologies and technologies to improve financial outcomes.', 
          color: 'border-[#C5A059]',
          icon: TrendingUp
        },
        { 
          title: 'Client-Centric', 
          desc: "Putting our clients' financial well-being at the heart of everything we do.", 
          color: 'border-[#197fe6]',
          icon: Handshake
        },
        { 
          title: 'Excellence', 
          desc: 'Delivering outstanding quality in our advisory services, support, and results.', 
          color: 'border-[#C5A059]',
          icon: Award
        }
      ].map((value, idx) => {
        const IconComponent = value.icon;
        return (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -5 }} // Subtle lift on hover
            className={`bg-white p-6 md:p-8 rounded-lg border-t-4 ${value.color} shadow-sm flex flex-col items-start transition-shadow hover:shadow-md`}
          >
            {/* Lucide Icon */}
            <div className="mb-4">
              <IconComponent 
                size={32} 
                className={`${idx % 2 === 0 ? 'text-[#197fe6]' : 'text-[#C5A059]'}`}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-[#111418] text-lg mb-3">
              {value.title}
            </h3>
            <p className="text-sm md:text-base text-[#637588] leading-relaxed">
              {value.desc}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16">Our Journey</h2>
          <div className="relative border-l-2 border-dashed border-gray-200 ml-4 space-y-12">
            {[
              { year: '2010', title: 'Inception', desc: 'Founded in London with 5 analysts.' },
              { year: '2015', title: 'Global Expansion', desc: 'Branches opened in Dubai and Singapore.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched AI-driven investment platform.' },
              { year: 'Today', title: 'Industry Leaders', desc: 'Managing over $5B in assets.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-8 group"
              >
                <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-[#197fe6] border-4 border-white" />
                <span className="text-[#197fe6] font-bold">{item.year}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-[#637588]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* Leadership Section */}
<section className="py-20 px-4 bg-[#f6f7f8] overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#111418]">Meet Our Leadership</h2>
      <p className="text-[#637588] mt-4 max-w-2xl mx-auto">
        The experts guiding our vision and ensuring your financial success.
      </p>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        { 
          name: 'Alexander Mizan', 
          role: 'Founder & CEO', 
          bio: 'With 20 years in investment banking, Alexander leads the strategic vision.',
          color: 'hover:shadow-[#197fe6]/20' 
        },
        { 
          name: 'Sarah Chen', 
          role: 'Chief Financial Officer', 
          bio: 'Sarah oversees all fiscal operations, ensuring robust financial health.',
          color: 'hover:shadow-[#C5A059]/20' 
        },
        { 
          name: 'David Ross', 
          role: 'Head of Advisory', 
          bio: 'Specializing in wealth preservation, David guides our high-net-worth strategies.',
          color: 'hover:shadow-[#197fe6]/20' 
        },
        { 
          name: 'Emily Thorne', 
          role: 'Chief Tech Officer', 
          bio: 'Emily drives our fintech innovations, ensuring security and efficiency.',
          color: 'hover:shadow-[#C5A059]/20' 
        }
      ].map((member, idx) => (
        <motion.div 
          key={idx}
          variants={fadeInUp}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
          className={`relative group bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl ${member.color}`}
        >
          {/* Glowing Aura Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute -inset-px bg-gradient-to-r from-[#197fe6] to-[#C5A059] rounded-xl blur-sm opacity-20"></div>
          </div>

          {/* Member Image Container */}
          <div className="h-72 bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              <User
                size={64}
                className="group-hover:scale-110 group-hover:text-[#197fe6]/30 transition-all duration-500"
                strokeWidth={1}
              />
            </div>
            {/* If using real images: 
            <Image src={`/team-${idx}.jpg`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={member.name} /> 
            */}
          </div>

          {/* Content */}
          <div className="p-6 relative bg-white z-20">
            <h3 className="font-bold text-lg text-[#111418] group-hover:text-[#197fe6] transition-colors">
              {member.name}
            </h3>
            <p className="text-[#C5A059] text-sm font-semibold mb-3 tracking-wide uppercase">
              {member.role}
            </p>
            <p className="text-[#637588] text-sm leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
              {member.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

   
    
    </main>
  );
}