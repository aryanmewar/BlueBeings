import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import MagneticButton from '@/components/common/MagneticButton';
import { textVariant, fadeIn } from '@/utils/animations';

export default function HeroText() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center min-h-screen pt-24 pb-12">
      {/* Top Studio Badge */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md w-fit mb-5 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-[10px] sm:text-xs text-cyan-300 uppercase tracking-widest">
          CREATIVE TECHNOLOGY STUDIO
        </span>
      </motion.div>

      {/* Main Brand Headline */}
      <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase font-heading tracking-tight leading-[0.92] text-slate-100 text-gradient-silver select-none"
        >
          BLUE BEINGS
        </motion.h1>

        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-3xl lg:text-4xl font-bold uppercase font-heading tracking-tight text-cyan-400 text-gradient-cyan"
        >
          WHERE STORIES COME ALIVE
        </motion.p>
      </div>

      {/* Rephrased Hero Studio Paragraph */}
      <motion.p
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        className="max-w-2xl text-slate-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed mb-8"
      >
        From bespoke brand kits and logo systems to custom web design, AI-driven graphics, and strategic brand consultancy—we transform your ideas into iconic visual identity. Whether crafting social media visuals, business stationery, or tailored portfolio flagships, we bring your vision to life with precision and creativity.
      </motion.p>

      {/* Action Buttons (Full width on mobile for easy tap) */}
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
      >
        <MagneticButton strength={0.2} className="w-full sm:w-auto">
          <Button href="#contact" variant="primary" size="md" className="w-full justify-center py-3.5">
            Start a Project
          </Button>
        </MagneticButton>

        <MagneticButton strength={0.2} className="w-full sm:w-auto">
          <Button href="#services" variant="secondary" size="md" className="w-full justify-center py-3.5">
            Explore Our Services
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  );
}
