import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { NAV_LINKS } from '@/utils/constants';

const YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F5F0E8] border-t border-[#1A1208]/10 text-[#6B5B4A] pt-16 pb-10 overflow-hidden">
      {/* Warm top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-orange-300/15 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1208]/10">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>
              <span className="font-heading text-xl font-black tracking-tight text-[#1A1208] uppercase">
                BLUE BEINGS
              </span>
            </div>
            <p className="text-[#6B5B4A] max-w-md text-sm leading-relaxed font-light">
              {siteConfig.description}
            </p>
            <div className="font-mono text-xs text-orange-600 space-y-1 pt-2">
              <div>LOCATION // {siteConfig.location}</div>
              <div>PRESENCE // {siteConfig.presence}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-[#9C8B7A] uppercase tracking-widest">// NAVIGATION</h4>
            <ul className="space-y-2 font-medium text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-orange-600 transition-colors uppercase tracking-wider block py-0.5"
                    data-cursor="pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-[#9C8B7A] uppercase tracking-widest">// CONNECT</h4>
            <ul className="space-y-2 font-medium text-xs sm:text-sm">
              {siteConfig.socials.slice(0, 4).map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600 transition-colors uppercase tracking-wider flex items-center justify-between group"
                    data-cursor="pointer"
                  >
                    <span>{social.name}</span>
                    <span className="font-mono text-xs text-[#9C8B7A] group-hover:text-orange-600">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Editorial Brand Display */}
        <div className="py-10 border-b border-[#1A1208]/5 text-center overflow-hidden">
          <h2 className="text-[10vw] font-black uppercase tracking-tighter text-[#1A1208]/8 leading-none select-none font-heading hover:text-orange-500/15 transition-colors duration-700">
            BLUE BEINGS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9C8B7A]">
          <div>
            &copy; {YEAR} {siteConfig.name}. Online-First Digital Studio. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#6B5B4A] hover:text-orange-600 transition-colors py-1.5 px-3.5 rounded-full border border-[#1A1208]/15 hover:border-orange-400"
            data-cursor="pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
