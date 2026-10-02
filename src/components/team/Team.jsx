import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import TeamCard from './TeamCard';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-36 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="05"
          tag="STUDIO LEADERSHIP"
          title="THE FOUNDERS BEHIND THE STORIES"
          description="Visionary creative direction, strategic brand architecture, and operational leadership driving Blue Beings."
        />

        {/* Founders Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
