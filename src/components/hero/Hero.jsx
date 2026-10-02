import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroText from './HeroText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
    >
      {/* Hero Typography & CTA */}
      <HeroText />

      {/* Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-8 flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="uppercase tracking-widest">SCROLL TO DISCOVER</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
          aria-label="Scroll down to About section"
          data-cursor="pointer"
        >
          <span className="hidden sm:inline uppercase tracking-widest">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50"
          >
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
