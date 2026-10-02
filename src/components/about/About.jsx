import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { siteConfig } from '@/data/site';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="01"
          tag="STUDIO PHILOSOPHY"
          title="WE CRAFT DIGITAL WORLDS WHERE STORIES COME ALIVE."
          description="At Blue Beings, technology is not just an execution detail—it is our primary artistic medium."
        />

        {/* Asymmetric Editorial Grid */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Main Statement (Left Column - 7 Cols) */}
          <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl sm:text-4xl font-light leading-snug text-slate-200">
              We operate at the convergence of <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 underline-offset-8">3D WebGL art</span>, spatial design, and high-impact digital storytelling.
            </h3>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              Founded on the premise that modern web experiences should feel cinematic, organic, and intensely responsive to human presence, Blue Beings builds digital products that transcend flat browser layouts.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
              We don't build standard websites; we engineer tactile digital flagship destinations that capture imagination, elevate brand value, and leave lasting emotional impressions.
            </p>

            {/* Studio Key Stats Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-cyan-400">
                    {stat.number}
                  </div>
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Editorial Asymmetric Card (Right Column - 5 Cols) */}
          <motion.div variants={fadeIn('left', 0.4)} className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6 overflow-hidden">
              {/* Top Accent Light */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                // CREATIVE POSTURE
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                "Code is our paint. Math is our light. Stories are our soul."
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>BLUE BEINGS LABS</span>
                <span>NYC / TYO / LDN</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
