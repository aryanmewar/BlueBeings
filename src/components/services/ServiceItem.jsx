import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function ServiceItem({ service, isHovered, onHover, onLeave }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative border-b border-white/10 transition-colors duration-300 py-5 sm:py-6 lg:py-7 cursor-pointer"
      data-cursor="pointer"
    >
      {/* Background Gradient Glow on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl`}
      />

      {/* Main Row */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 px-3 sm:px-5"
      >
        {/* Left: Number & Title */}
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-mono text-xs sm:text-sm font-semibold text-cyan-400/80 group-hover:text-cyan-400 transition-all duration-300">
            {service.number}
          </span>
          <div>
            <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-slate-100 group-hover:text-cyan-300 group-hover:translate-x-2 transition-transform duration-300">
              {service.title}
            </h3>
            <p className="font-mono text-[11px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Action Toggle & Tags */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-wrap gap-2 max-w-xs justify-end">
            {service.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 flex items-center justify-center transition-all duration-300 shrink-0">
            {isOpen ? (
              <Minus className="w-4 h-4 text-cyan-400" />
            ) : (
              <Plus className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            )}
          </div>
        </div>
      </div>

      {/* Accordion / Expanded Offerings Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden px-3 sm:px-5 pt-4"
          >
            <div className="pt-4 border-t border-white/10 space-y-5">
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                {service.description}
              </p>

              {/* Offerings Bullet Grid */}
              <div className="space-y-2.5 pt-1">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                  // INCLUDED OFFERINGS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {service.offerings.map((offering, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-xs font-medium">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <a
                  href="#contact"
                  className="font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest flex items-center gap-2 group/link"
                >
                  <span>GET STARTED WITH THIS SERVICE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
