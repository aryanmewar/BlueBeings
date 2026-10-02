import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import TeamCard from './TeamCard';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="05"
          tag="CREATIVE TEAM"
          title="THE PEOPLE BEHIND THE STORIES"
          description="A multidisciplinary collective of 3D artists, WebGL developers, motion designers, and brand architects."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
