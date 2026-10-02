import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import Button from '@/components/common/Button';
import MagneticButton from '@/components/common/MagneticButton';

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="03"
          tag="FEATURED ARCHIVES"
          title="SELECTED WORK"
          description="A curated showcase of 3D digital experiences, cinematic brand identities, and real-time WebGL applications."
        />

        {/* Portfolio Showcase Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* View All Archives CTA */}
        <div className="mt-16 text-center">
          <MagneticButton strength={0.3}>
            <Button href="#contact" variant="secondary" size="lg">
              REQUEST COMPLETE ARCHIVE BRIEF
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
