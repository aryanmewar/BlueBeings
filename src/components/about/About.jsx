import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { siteConfig } from '@/data/site';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="01"
          tag="STUDIO PHILOSOPHY"
          title="WHERE STORIES COME ALIVE."
          description="At Blue Beings, we transform abstract ideas into striking visual experiences—crafting brand identities, digital flagships, and high-impact media."
        />

        {/* Asymmetric Editorial Grid */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Main Statement (Left Column - 7 Cols) */}
          <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-3xl font-light leading-relaxed text-slate-200">
              We operate at the intersection of <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 underline-offset-8">creative storytelling</span>, strategic branding, custom web design, and digital art.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Blue Beings is a creative studio dedicated to giving every brand, business, and concept a vivid narrative. Through precision design, logo architecture, AI-driven artwork, and video post-production, we give your vision an undeniable presence.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Whether building an executive portfolio, shaping a brand identity from scratch, or designing high-conversion social visuals, our commitment is simple: <span className="text-slate-200 font-medium italic">"Blue Beings — Where Stories Come Alive."</span>
            </p>

            {/* Studio Key Stats Grid (Temporarily Commented Out) */}
            {/*
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            */}
          </motion.div>

          {/* Editorial Asymmetric Card (Right Column - 5 Cols) */}
          <motion.div variants={fadeIn('left', 0.4)} className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-5 overflow-hidden">
              {/* Top Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                // STUDIO TAGLINE
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                "Where Stories Come Alive."
              </blockquote>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                From logos to business cards, social media assets to custom digital flagships, we craft complete visual ecosystems.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>BLUE BEINGS</span>
                <span className="text-cyan-400">CREATIVE STUDIO</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
