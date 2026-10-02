import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeIn } from '@/utils/animations';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
      data-cursor="project"
      data-cursor-text="VIEW"
    >
      {/* Visual Image Container */}
      <div
        className={`lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 glass-panel shadow-[0_20px_60px_rgba(0,0,0,0.7)] group-hover:border-cyan-400/50 transition-all duration-700 ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Cyan Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Hover Floating Category Tag */}
        <div className="absolute top-5 left-5 font-mono text-[11px] text-cyan-300 bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
          {project.category}
        </div>
      </div>

      {/* Text Details (5 Columns) */}
      <div
        className={`lg:col-span-5 space-y-4 ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-2.5">
          <span>CLIENT // {project.client}</span>
          <span className="text-cyan-400">{project.year}</span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest -mt-1">
          {project.subtitle}
        </p>

        <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Action */}
        <div className="pt-2">
          <button className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest text-cyan-400 uppercase group-hover:text-white transition-colors">
            <span>EXPLORE CASE STUDY</span>
            <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
