import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import Background from '@/components/layout/Background';
import Home from '@/pages/Home';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function App() {
  const { activeSection } = useScrollProgress();

  return (
    <div className="relative bg-[#FAF7F2] text-[#1A1208] min-h-screen overflow-x-hidden selection:bg-orange-300 selection:text-[#1A1208] font-body">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Warm Ambient Background */}
      <Background />

      {/* Main Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Pages */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
}
