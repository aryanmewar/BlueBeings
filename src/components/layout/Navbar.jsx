import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';
import MagneticButton from '@/components/common/MagneticButton';
import MobileMenu from './MobileMenu';
import { NAV_LINKS, SITE_NAME } from '@/utils/constants';

export default function Navbar({ activeSection = 'hero' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-xl border-b border-[#1A1208]/10 py-3.5 shadow-[0_4px_24px_rgba(26,18,8,0.08)]'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            data-cursor="pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-[0_0_12px_rgba(232,82,26,0.35)] transition-transform duration-500 group-hover:rotate-180">
              <div className="w-full h-full bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-[#1A1208] uppercase group-hover:text-orange-600 transition-colors">
                {SITE_NAME}
              </span>
              <span className="font-mono text-[8px] tracking-widest text-orange-500 uppercase -mt-1 opacity-80">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-lg border border-[#1A1208]/10 shadow-sm px-5 py-2 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-orange-600' : 'text-[#6B5B4A] hover:text-[#1A1208]'
                  }`}
                  data-cursor="pointer"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-orange-50 rounded-full border border-orange-200 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton strength={0.25}>
              <Button href="#contact" variant="primary" size="sm">
                Start a Project
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden relative z-40 p-2.5 rounded-full bg-white/80 border border-[#1A1208]/10 text-[#1A1208] hover:text-orange-600 focus:outline-none backdrop-blur-md"
            aria-label="Open menu"
            data-cursor="pointer"
          >
            <Menu className="w-5 h-5 text-orange-500" />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
