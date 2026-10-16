import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeIn } from '@/utils/animations';

export default function TeamCard({ member, index }) {
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
      className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-[#1A1208]/10 hover:border-orange-300 transition-all duration-500 overflow-hidden flex flex-col justify-between w-full"
    >
      {/* Warm background glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-2xl group-hover:bg-orange-200/70 transition-all pointer-events-none" />

      <div className="space-y-5">
        {/* Image / Avatar */}
        <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-[#F5F0E8] border border-[#1A1208]/10 flex items-center justify-center">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-orange-50 via-amber-50 to-[#F5F0E8] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-24 h-24 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-600 shadow-[0_0_30px_rgba(232,82,26,0.15)] mb-2">
                <span className="font-heading text-3xl font-black tracking-widest text-orange-500">
                  {initials}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#9C8B7A] uppercase tracking-widest">
                {isCoFounder ? 'CO-FOUNDER PORTRAIT' : 'FOUNDER PORTRAIT'}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-orange-700 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full uppercase border border-orange-200">
            // {member.specialty}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#1A1208] group-hover:text-orange-700 transition-colors">
              {member.name}
            </h3>
            <span className="font-mono text-[10px] text-orange-600 border border-orange-200 bg-orange-50 px-2.5 py-0.5 rounded-full">
              {isCoFounder ? 'CO-FOUNDER' : 'FOUNDER'}
            </span>
          </div>

          <p className="font-mono text-xs text-orange-500 uppercase tracking-widest mt-1">
            {member.role}
          </p>

          <p className="text-[#6B5B4A] text-xs sm:text-sm font-light leading-relaxed mt-3">
            {member.bio}
          </p>
        </div>
      </div>

      {/* LinkedIn Link */}
      <div className="pt-5 mt-5 border-t border-[#1A1208]/10 flex items-center justify-between font-mono text-xs">
        <span className="text-[10px] text-[#9C8B7A] uppercase tracking-widest">CONNECT ON LINKEDIN</span>
        <div className="flex items-center gap-2">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
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
