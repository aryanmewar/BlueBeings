import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

export default function ServiceItem({ service, isHovered, onHover, onLeave }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative border-b border-white/10 transition-colors duration-500 py-8 lg:py-10 cursor-pointer"
      data-cursor="pointer"
    >
      {/* Background Subtle Gradient Glow on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
      />

      {/* Main Row */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 sm:px-6">
        {/* Left: Number & Title */}
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-sm sm:text-base font-medium text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
            {service.number}
          </span>
          <div>
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-slate-200 group-hover:text-white group-hover:translate-x-3 transition-transform duration-300">
              {service.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Expand Toggle & Tags */}
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 flex items-center justify-center transition-all duration-300"
            aria-label="Toggle details"
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-cyan-400" />
            ) : (
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Accordion / Expanded Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden px-4 sm:px-6 pt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-white/5">
              <div className="md:col-span-8 space-y-4">
                <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full uppercase"
                    >
                      // {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex items-center justify-end">
                <a
                  href="#contact"
                  className="font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest flex items-center gap-2 group/link"
                >
                  <span>REQUEST CAPABILITY BRIEF</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
