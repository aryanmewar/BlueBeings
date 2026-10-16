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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-8 flex items-center justify-between font-mono text-xs text-[#9C8B7A]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="uppercase tracking-widest">SCROLL TO DISCOVER</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 hover:text-orange-600 transition-colors group"
          aria-label="Scroll down to About section"
          data-cursor="pointer"
        >
          <span className="hidden sm:inline uppercase tracking-widest">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-white/80 border border-[#1A1208]/15 flex items-center justify-center group-hover:border-orange-400"
          >
            <ChevronDown className="w-4 h-4 text-orange-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
