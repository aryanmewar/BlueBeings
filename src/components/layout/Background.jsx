import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#FAF7F2]">
      {/* Warm Ambient Radial Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-orange-300/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[580px] h-[580px] rounded-full bg-amber-200/25 blur-[160px]" />
      <div className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-red-200/20 blur-[150px]" />
      <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] rounded-full bg-emerald-200/15 blur-[120px]" />

      {/* Warm Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(26,18,8,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_50%,transparent_100%)] opacity-70" />

      {/* Center Warm Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,26,0.05),transparent_65%)] pointer-events-none" />

      {/* Edge vignettes — cream fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </div>
  );
}
