import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function ServiceItem({ service, isHovered, onHover, onLeave }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative border-b border-[#1A1208]/10 transition-colors duration-300 py-5 sm:py-6 cursor-pointer ${
        isHovered ? 'bg-orange-50/60' : ''
      }`}
      data-cursor="pointer"
    >
      {/* Hover background highlight */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl`}
      />

      {/* Main Row */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 px-3 sm:px-5"
      >
        {/* Left: Number & Title */}
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-mono text-xs sm:text-sm font-semibold text-orange-400 group-hover:text-orange-600 transition-all duration-300">
            {service.number}
          </span>
          <div>
            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#1A1208] group-hover:text-orange-700 group-hover:translate-x-1.5 transition-all duration-300">
              {service.title}
            </h3>
            <p className="font-mono text-[11px] sm:text-xs text-[#9C8B7A] mt-0.5 uppercase tracking-wider">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Tags + Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-wrap gap-2 max-w-xs justify-end">
            {service.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] text-[#6B5B4A] bg-[#1A1208]/5 border border-[#1A1208]/10 px-2.5 py-1 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 group-hover:border-orange-400 group-hover:bg-orange-100 flex items-center justify-center transition-all duration-300 shrink-0">
            {isOpen ? (
              <Minus className="w-4 h-4 text-orange-600" />
            ) : (
              <Plus className="w-4 h-4 text-[#9C8B7A] group-hover:text-orange-600 transition-colors" />
            )}
          </div>
        </div>
      </div>

      {/* Accordion Expanded Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden px-3 sm:px-5 pt-4"
          >
            <div className="pt-4 border-t border-[#1A1208]/10 space-y-4">
              <p className="text-[#6B5B4A] text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
                {service.description}
              </p>

              {/* Offerings Grid */}
              <div className="space-y-2 pt-1">
                <div className="font-mono text-xs text-orange-600 uppercase tracking-widest">
                  // INCLUDED OFFERINGS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {service.offerings.map((offering, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-100 hover:border-orange-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-[#1A1208] text-xs font-medium">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <a
                  href="#contact"
                  className="font-mono text-xs text-orange-600 hover:text-[#1A1208] uppercase tracking-widest flex items-center gap-2 group/link"
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
