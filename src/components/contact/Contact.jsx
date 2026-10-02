import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from './ContactForm';
import { siteConfig } from '@/data/site';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="06"
          tag="INITIATE DIALOGUE"
          title="LET'S CREATE SOMETHING WORTH REMEMBERING."
          description="Ready to bring your digital vision to life? Tell us about your project or schedule a technical creative session."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="font-heading text-2xl font-bold uppercase text-slate-100">
                DIRECT INQUIRIES
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">STUDIO INBOX</div>
                    <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">GLOBAL HUBS</div>
                    <div className="font-medium text-slate-200">{siteConfig.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">LATITUDE & LONGITUDE</div>
                    <div className="font-mono text-xs text-cyan-300">{siteConfig.coordinates}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest">// CONNECT ONLINE</h4>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
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
