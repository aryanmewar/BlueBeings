import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceItem from './ServiceItem';
import { services } from '@/data/services';
import { fadeIn } from '@/utils/animations';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative py-28 md:py-40 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          number="02"
          tag="CORE CAPABILITIES"
          title="SERVICES & EXPERTISE"
          description="We provide end-to-end creative engineering, from strategic brand architecture to cutting-edge WebGL graphics."
        />

        {/* Services List */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="border-t border-white/10"
        >
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isHovered={hoveredService?.id === service.id}
              onHover={() => setHoveredService(service)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Image Reveal Tooltip on Desktop Hover */}
      {hoveredService && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePos.x + 25,
            y: mousePos.y - 120,
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.1 }}
          className="fixed top-0 left-0 pointer-events-none z-30 hidden lg:block w-72 h-48 rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] bg-slate-900"
        >
          <img
            src={hoveredService.image}
            alt={hoveredService.title}
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex items-end">
            <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
              {hoveredService.title} // 0{hoveredService.number}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
