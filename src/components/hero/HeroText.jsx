import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import MagneticButton from '@/components/common/MagneticButton';
import { textVariant, fadeIn } from '@/utils/animations';

export default function HeroText() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-screen pt-24 pb-16">
      {/* Top Studio Badge */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md w-fit mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
          CREATIVE TECHNOLOGY STUDIO
        </span>
      </motion.div>

      {/* Main Brand Headline */}
      <div className="space-y-2 mb-8">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="text-6xl sm:text-8xl lg:text-[9.5rem] xl:text-[11rem] font-black uppercase font-heading tracking-tighter leading-[0.88] text-slate-100 text-gradient-silver select-none"
        >
          BLUE BEINGS
        </motion.h1>

        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase font-heading tracking-tight text-cyan-400 text-gradient-cyan"
        >
          WHERE STORIES COME ALIVE
        </motion.p>
      </div>

      {/* Supporting Text */}
      <motion.p
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        className="max-w-2xl text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 text-shadow-sm"
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
          <Button href="#contact" variant="primary" size="lg">
            Start a Project
          </Button>
        </MagneticButton>

        <MagneticButton strength={0.25}>
          <Button href="#work" variant="secondary" size="lg">
            Explore Our Work
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  );
}
