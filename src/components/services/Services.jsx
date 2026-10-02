import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceItem from './ServiceItem';
import { services } from '@/data/services';
import { fadeIn } from '@/utils/animations';

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(null);

  return (
    <section id="services" className="relative py-24 md:py-36 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="02"
          tag="CORE CAPABILITIES"
          title="SERVICES & EXPERTISE"
          description="We provide end-to-end creative solutions, from strategic brand architecture to custom web design, graphic artwork, video editing, and social growth."
        />

        {/* Clean Full-Width Services List */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="border-t border-white/10 w-full"
        >
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isHovered={activeServiceId === service.id}
              onHover={() => setActiveServiceId(service.id)}
              onLeave={() => setActiveServiceId(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
