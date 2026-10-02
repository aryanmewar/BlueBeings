import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { processSteps } from '@/data/team';
import { fadeIn } from '@/utils/animations';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 z-10 overflow-hidden bg-slate-950/40 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="04"
          tag="METHODOLOGY"
          title="HOW WE CREATE"
          description="A tailored 5-stage timeline workflow engineered to execute your brand identity, web design, graphic artwork, video editing, and social growth."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-20">
          {/* Central Glowing Laser Line for Desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-400/50 to-cyan-500/0 shadow-[0_0_15px_rgba(0,240,255,0.6)]" />

          {/* Left Vertical Line for Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-4 sm:left-6 w-0.5 bg-cyan-500/30" />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === processSteps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeIn(isEven ? 'right' : 'left', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-80px' }}
                  className={`relative flex flex-col ${
                    isLast
                      ? 'lg:items-center'
                      : isEven
                      ? 'lg:flex-row lg:justify-start'
                      : 'lg:flex-row-reverse lg:justify-start'
                  } items-start pl-12 lg:pl-0`}
                >
                  {/* Timeline Pulse Node Indicator */}
                  <div
                    className={`absolute left-2.5 sm:left-4.5 ${
                      isLast ? 'lg:left-1/2 lg:-translate-x-1/2' : 'lg:left-1/2 lg:-translate-x-1/2'
                    } top-6 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.8)]`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Card Container (Takes 5 Columns out of 12 on Desktop) */}
                  <div className={`w-full ${isLast ? 'lg:max-w-2xl' : 'lg:w-[46%]'}`}>
                    <div className="group relative glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-cyan-400/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                      {/* Top Glowing Ambient Orb */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/25 transition-all pointer-events-none" />

                      <div>
                        {/* Header: Stage Badge & Counter */}
                        <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                              STAGE // {step.number}
                            </span>
                          </div>
                          <span className="font-mono text-xl font-extrabold text-slate-400 group-hover:text-cyan-400 transition-colors">
                            0{idx + 1} / 05
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1 mb-3">
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

                      {/* Bottom Process Bar */}
                      <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500 group-hover:text-cyan-300">
                        <span>WORKFLOW STAGE</span>
                        <span>0{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
