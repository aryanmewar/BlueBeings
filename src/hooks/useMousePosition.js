import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    // Disable on touch-only mobile devices to save CPU/GPU cycles
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
            normalizedX: (e.clientX / innerWidth) * 2 - 1,
            normalizedY: -(e.clientY / innerHeight) * 2 + 1,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}
