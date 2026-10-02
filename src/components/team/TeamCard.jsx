import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Sparkles, MessageCircle } from 'lucide-react';
import { fadeIn } from '@/utils/animations';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all pointer-events-none" />

      {/* Member Image & Details */}
      <div className="space-y-6">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-cyan-300 bg-[#030712]/80 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-cyan-500/20">
            // {member.specialty}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
            {member.name}
          </h3>
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mt-1">
            {member.role}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-3">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Social / Portfolio Links */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="text-[10px] text-cyan-400 uppercase tracking-widest">CONNECT</span>
        <div className="flex items-center gap-3">
          <a
            href={Object.values(member.social)[0] || '#'}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            aria-label="Social Link 1"
          >
            <Globe className="w-3.5 h-3.5" />
          </a>
          <a
            href={Object.values(member.social)[1] || '#'}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            aria-label="Social Link 2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
