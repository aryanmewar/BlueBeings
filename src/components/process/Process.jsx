import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { processSteps } from '@/data/team';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 z-10 overflow-hidden bg-slate-950/40 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="04"
          tag="METHODOLOGY"
          title="HOW WE CREATE"
          description="A tailored 5-stage workflow engineered to execute your brand identity, web design, graphic artwork, video editing, and social growth seamlessly."
        />

        {/* Process Cards Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {processSteps.map((step, idx) => {
            const isLast = idx === processSteps.length - 1;

            return (
              <motion.div
                key={step.number}
                variants={fadeIn('up', idx * 0.1)}
                className={`group relative glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Subtle Cyan Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all pointer-events-none" />

                {/* Header: Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                        STAGE // {step.number}
                      </span>
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 mb-4">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500 group-hover:text-slate-400">
                  <span>WORKFLOW PHASE</span>
                  <span className="text-cyan-400/80">0{idx + 1} / 05</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
