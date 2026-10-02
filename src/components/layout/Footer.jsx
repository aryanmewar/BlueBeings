import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { NAV_LINKS } from '@/utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020408] border-t border-white/10 text-slate-300 pt-20 pb-12 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-heading text-2xl font-black tracking-tight text-white uppercase">
                BLUE BEINGS
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-base leading-relaxed font-light">
              {siteConfig.description}
            </p>
            <div className="font-mono text-xs text-cyan-400 space-y-1">
              <div>LOCATION // {siteConfig.location}</div>
              <div>COORDINATES // {siteConfig.coordinates}</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest">// NAVIGATION</h4>
            <ul className="space-y-2.5 font-medium text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors uppercase tracking-wider block py-0.5"
                    data-cursor="pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest">// CONNECT</h4>
            <ul className="space-y-2.5 font-medium text-sm">
              {siteConfig.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors uppercase tracking-wider flex items-center justify-between group"
                    data-cursor="pointer"
                  >
                    <span>{social.name}</span>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-cyan-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Editorial Branding Display */}
        <div className="py-12 border-b border-white/5 text-center overflow-hidden">
          <h2 className="text-[12vw] font-black uppercase tracking-tighter text-slate-900/60 leading-none select-none font-heading hover:text-cyan-950/40 transition-colors duration-700">
            BLUE BEINGS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name} Studio Inc. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors py-2 px-4 rounded-full border border-slate-800 hover:border-cyan-400/50"
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
