import React from 'react';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Projects from '@/components/projects/Projects';
import Process from '@/components/process/Process';
import Team from '@/components/team/Team';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Team />
      <Contact />
    </main>
  );
}
