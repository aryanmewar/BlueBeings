import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME } from '@/utils/constants';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#030712]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 text-slate-100 border-b border-cyan-500/20 overflow-y-auto"
        >
          {/* Top Header Bar inside Mobile Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-heading font-black text-lg tracking-tight text-white uppercase">
                {SITE_NAME}
              </span>
            </div>

            {/* Prominent Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none"
              aria-label="Close menu"
            >
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">CLOSE</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-col space-y-4 my-auto py-6">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + idx * 0.06, duration: 0.35 }}
                className="group flex items-baseline justify-between border-b border-slate-800/60 pb-2.5"
              >
                <span className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </span>
                <span className="font-mono text-xs text-cyan-400/80">0{idx + 1}</span>
              </motion.a>
            ))}
          </div>

          {/* Bottom Actions & Socials */}
          <div className="space-y-5 shrink-0 pt-4 border-t border-slate-800">
            <Button
              href="#contact"
              onClick={onClose}
              variant="primary"
              size="md"
              className="w-full text-center justify-center py-3.5"
            >
              Start a Project
            </Button>

            <div className="flex flex-wrap gap-4 justify-between font-mono text-[11px] text-slate-400 uppercase tracking-wider">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
