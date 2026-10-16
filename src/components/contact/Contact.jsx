import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from './ContactForm';
import { siteConfig } from '@/data/site';
import { Mail, MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 z-10 overflow-hidden bg-[#F5F0E8]/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="06"
          tag="INITIATE DIALOGUE"
          title="LET'S CREATE SOMETHING WORTH REMEMBERING."
          description="Ready to bring your digital vision to life? Connect with us via Email, WhatsApp, or Social Media."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#1A1208]/10 space-y-5">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#1A1208]">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 group p-3.5 rounded-xl bg-orange-50/60 border border-orange-100 hover:border-orange-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#9C8B7A] uppercase">EMAIL ADDRESS</div>
                    <div className="font-medium text-xs sm:text-sm text-[#1A1208] group-hover:text-orange-600 transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 group p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#9C8B7A] uppercase">WHATSAPP CHAT</div>
                    <div className="font-medium text-xs sm:text-sm text-[#1A1208] group-hover:text-emerald-600 transition-colors">
                      Connect on WhatsApp 📱
                    </div>
                  </div>
                </a>

                {/* Service Region */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#9C8B7A] uppercase">SERVICE REGION</div>
                    <div className="font-mono text-xs text-amber-700">India & Global Online Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#1A1208]/10 space-y-4">
              <h4 className="font-mono text-xs text-[#9C8B7A] uppercase tracking-widest">// SOCIAL CONNECT</h4>
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-orange-50/60 border border-orange-100 hover:border-orange-300 hover:text-orange-600 text-[#6B5B4A] transition-all flex items-center justify-between"
                  >
                    <span>{s.name}</span>
                    <span className="text-[#9C8B7A]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
