"use client"
import { motion } from 'framer-motion'
const Banner = () => (
  <div className="px-8 py-10">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="max-w-7xl mx-auto bg-blue-600 rounded-3xl p-16 text-white text-left relative overflow-hidden"
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">30 Years of Integrity</h2>
        <p className="max-w-xl text-blue-100 mb-8 text-lg">
          Founded in 1994, FinAudit Pro has helped over 500+ corporations navigate complex financial landscapes with absolute transparency.
        </p>
        <button className="font-bold border-b-2 border-white pb-1 hover:text-blue-200 transition">
          Read Our Story
        </button>
      </div>
      {/* Decorative circle */}
      <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </motion.div>
  </div>
);

export default Banner;