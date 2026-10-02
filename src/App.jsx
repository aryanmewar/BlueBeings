import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import Loader from '@/components/common/Loader';
import ThreeBackground from '@/components/three/ThreeBackground';
import Home from '@/pages/Home';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useIsMobile } from '@/hooks/useMediaQuery';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollProgress, activeSection } = useScrollProgress();
  const mousePos = useMousePosition();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Hide initial loader after 1.8s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#030712] text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-black font-body">
      {/* Site Loader */}
      <Loader isLoading={isLoading} />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Immersive 3D WebGL Background Scene */}
      <ThreeBackground
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        isMobile={isMobile}
      />

      {/* Main Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Pages */}
      <Home />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
