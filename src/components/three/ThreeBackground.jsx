import React from 'react';
import ThreeScene from './ThreeScene';

export default function ThreeBackground({ scrollProgress = 0, mousePos, isMobile }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Three.js Canvas Layer */}
      <ThreeScene
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        isMobile={isMobile}
      />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      {/* Dynamic Ambient Gradient Orbs */}
      <div
        className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] transition-all duration-700 pointer-events-none"
        style={{
          transform: `translateY(${scrollProgress * 200}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] transition-all duration-700 pointer-events-none"
        style={{
          transform: `translateY(${-scrollProgress * 150}px)`,
        }}
      />

      {/* Top & Bottom Subtle Vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10" />
    </div>
  );
}
