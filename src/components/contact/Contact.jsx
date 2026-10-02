import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from './ContactForm';
import { siteConfig } from '@/data/site';
import { Mail, MessageCircle, Globe, Laptop } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="06"
          tag="INITIATE DIALOGUE"
          title="LET'S CREATE SOMETHING WORTH REMEMBERING."
          description="Ready to bring your digital vision to life? Connect with us via Email, WhatsApp, or Social Media."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-slate-100">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-3.5">
                {/* Email Option */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 group p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">EMAIL ADDRESS</div>
                    <div className="font-medium text-xs sm:text-sm text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Option */}
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 group p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-green-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-400/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">WHATSAPP CHAT</div>
                    <div className="font-medium text-xs sm:text-sm text-slate-200 group-hover:text-green-400 transition-colors">
                      Connect on WhatsApp 📱
                    </div>
                  </div>
                </a>

                {/* Operating Model */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">SERVICE REGION</div>
                    <div className="font-mono text-xs text-cyan-300">India & Global Online Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest">// SOCIAL CONNECT</h4>
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-400 transition-all flex items-center justify-between"
                  >
                    <span>{s.name}</span>
                    <span className="text-slate-500">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
