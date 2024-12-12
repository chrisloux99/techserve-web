import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#FFF8E7] to-[#D4A76A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="flex items-center justify-center">
                <Server className="h-12 w-12 text-[#32CD32] mr-2" />
                <h1 className="text-5xl md:text-6xl font-bold text-[#1E90FF]">
                  TechServe
                </h1>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 border-4 border-[#1E90FF]/30 rounded-full"
                style={{ width: 'calc(100% + 32px)', height: 'calc(100% + 32px)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 border-4 border-[#32CD32]/30 rounded-full"
                style={{ width: 'calc(100% + 32px)', height: 'calc(100% + 32px)' }}
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#32CD32] mb-6">
            Leading IT Solutions Provider
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Professional IT services in Zambia since 2003. Delivering excellence in networking, satellite communications, and software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E90FF] text-[#FFF8E7] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#32CD32] transition-colors duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#32CD32] text-[#FFF8E7] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1E90FF] transition-colors duration-300"
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7]/30 to-[#D4A76A]/30 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="url(#grid-pattern)"
              fillOpacity="0.1"
            />
          </svg>
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
      </div>
    </section>
  );
};

export default Hero;