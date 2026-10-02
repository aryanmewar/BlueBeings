import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME, SITE_TAGLINE } from '@/utils/constants';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-[#030712]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 text-slate-100 border-b border-cyan-500/20"
        >
          {/* Main Navigation Links */}
          <div className="flex flex-col space-y-6 my-auto">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                className="group flex items-baseline justify-between border-b border-slate-800/60 pb-3"
              >
                <span className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </span>
                <span className="font-mono text-xs text-cyan-400/80">0{idx + 1}</span>
              </motion.a>
            ))}
          </div>

          {/* Bottom Actions & Socials */}
          <div className="space-y-6">
            <Button
              href="#contact"
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full text-center justify-center"
            >
              Start a Project
            </Button>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
              {SOCIAL_LINKS.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors uppercase tracking-wider"
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
