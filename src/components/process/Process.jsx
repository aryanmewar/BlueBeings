import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { processSteps } from '@/data/team';
import { fadeIn } from '@/utils/animations';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 z-10 overflow-hidden bg-[#FAF7F2] border-y border-[#1A1208]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="04"
          tag="METHODOLOGY"
          title="HOW WE CREATE"
          description="A tailored 5-stage timeline workflow engineered to execute your brand identity, web design, graphic artwork, video editing, and social growth."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-20">
          {/* Central Line — Desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-100 via-orange-300/70 to-orange-100" />

          {/* Left Line — Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-4 sm:left-6 w-0.5 bg-orange-200" />

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
                  {/* Timeline Pulse Node */}
                  <div
                    className={`absolute left-2.5 sm:left-4.5 ${
                      isLast ? 'lg:left-1/2 lg:-translate-x-1/2' : 'lg:left-1/2 lg:-translate-x-1/2'
                    } top-6 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-[#FAF7F2] border-2 border-orange-400 flex items-center justify-center shadow-[0_0_16px_rgba(232,82,26,0.4)]`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  </div>

                  {/* Card */}
                  <div className={`w-full ${isLast ? 'lg:max-w-2xl' : 'lg:w-[46%]'}`}>
                    <div className="group relative glass-panel rounded-3xl p-7 sm:p-9 border border-[#1A1208]/10 hover:border-orange-300 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                      {/* Ambient glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-orange-100/60 rounded-full blur-2xl group-hover:bg-orange-200/70 transition-all pointer-events-none" />

                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5 border-b border-[#1A1208]/10 pb-3.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-semibold">
                              STAGE // {step.number}
                            </span>
                          </div>
                          <span className="font-mono text-xl font-extrabold text-[#C8B8A4] group-hover:text-orange-500 transition-colors">
                            0{idx + 1} / 05
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1 mb-3">
                          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1A1208] group-hover:text-orange-700 transition-colors">
                            {step.title}
                          </h3>
                          <p className="font-mono text-xs text-orange-500 uppercase tracking-wider">
                            {step.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-[#6B5B4A] text-xs sm:text-sm font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom bar */}
                      <div className="pt-5 mt-5 border-t border-[#1A1208]/5 flex items-center justify-between font-mono text-[10px] text-[#9C8B7A] group-hover:text-orange-500">
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
