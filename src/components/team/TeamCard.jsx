import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeIn } from '@/utils/animations';

export default function TeamCard({ member, index }) {
  // Extract initials dynamically (e.g. ARYAN SHARMA -> AS, BALJINDER KAUR -> BK)
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const isCoFounder = member.role.toLowerCase().includes('co-founder');

  return (
    <motion.div
      variants={fadeIn('up', index * 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden flex flex-col justify-between w-full"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all pointer-events-none" />

      {/* Member Image / Placeholder & Details */}
      <div className="space-y-5">
        <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          ) : (
            /* Minimal Futuristic Glass Avatar Placeholder */
            <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-black flex flex-col items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
              <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.2)] mb-2">
                <span className="font-heading text-3xl font-black tracking-widest text-cyan-300">
                  {initials}
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                {isCoFounder ? 'CO-FOUNDER PORTRAIT' : 'FOUNDER PORTRAIT'}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-cyan-300 bg-[#030712]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full uppercase border border-cyan-500/20">
            // {member.specialty}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
              {member.name}
            </h3>
            <span className="font-mono text-[10px] text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
              {isCoFounder ? 'CO-FOUNDER' : 'FOUNDER'}
            </span>
          </div>

          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mt-1">
            {member.role}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mt-3">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Social & LinkedIn Link */}
      <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest">CONNECT ON LINKEDIN</span>
        <div className="flex items-center gap-2">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              aria-label={`${member.name} LinkedIn`}
            >
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
