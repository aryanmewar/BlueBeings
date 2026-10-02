import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { processSteps } from '@/data/team';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40 z-10 overflow-hidden bg-slate-950/40 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="04"
          tag="METHODOLOGY"
          title="HOW WE CREATE"
          description="A disciplined 5-stage production methodology engineered for artistic precision and technical excellence."
        />

        {/* Process Sequence Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={fadeIn('up', idx * 0.1)}
              className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between h-full hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Top Step Index */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-2xl font-black text-cyan-400 group-hover:scale-110 transition-transform">
                  {step.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-40 group-hover:opacity-100 group-hover:animate-ping" />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-6">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider">
                  {step.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Connector Line for Desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-cyan-500/40 font-mono text-xs">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
