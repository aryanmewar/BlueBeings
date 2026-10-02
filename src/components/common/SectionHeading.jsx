import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

export default function SectionHeading({
  number,
  tag,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-20 max-w-4xl ${alignClasses[align]} ${className}`}>
      {/* Top Tag & Index */}
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="flex items-center gap-3 mb-4"
      >
        {number && (
          <span className="font-mono text-xs sm:text-sm tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-1 rounded-full">
            {number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            // {tag}
          </span>
        )}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.95] text-slate-100 mb-6"
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
