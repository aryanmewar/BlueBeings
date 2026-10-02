import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import MagneticButton from '@/components/common/MagneticButton';
import { textVariant, fadeIn } from '@/utils/animations';

export default function HeroText() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-screen pt-20 pb-12">
      {/* Top Studio Badge */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md w-fit mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
          CREATIVE TECHNOLOGY STUDIO
        </span>
      </motion.div>

      {/* Main Brand Headline */}
      <div className="space-y-2 mb-6">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase font-heading tracking-tight leading-[0.9] text-slate-100 text-gradient-silver select-none"
        >
          BLUE BEINGS
        </motion.h1>

        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-xl sm:text-3xl lg:text-4xl font-bold uppercase font-heading tracking-tight text-cyan-400 text-gradient-cyan"
        >
          WHERE STORIES COME ALIVE
        </motion.p>
      </div>

      {/* Supporting Text */}
      <motion.p
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        className="max-w-xl text-slate-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-8"
      >
        We architect immersive 3D digital experiences, interactive WebGL landscapes, cinematic identities, and technology-driven narratives for forward-thinking visionaries.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center gap-4 sm:gap-6"
      >
        <MagneticButton strength={0.25}>
          <Button href="#contact" variant="primary" size="md">
            Start a Project
          </Button>
        </MagneticButton>

        <MagneticButton strength={0.25}>
          <Button href="#work" variant="secondary" size="md">
            Explore Our Work
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  );
}
