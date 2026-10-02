import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMediaQuery';

export default function CustomCursor() {
  const isMobile = useIsMobile();
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    // Enable custom cursor class on body
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea, [role="button"]');
      if (target) {
        const customType = target.getAttribute('data-cursor');
        const customText = target.getAttribute('data-cursor-text');

        if (customType) {
          setCursorState(customType);
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
          setCursorState('pointer');
        }

        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  const variants = {
    default: {
      x: mousePos.x - 8,
      y: mousePos.y - 8,
      width: 16,
      height: 16,
      backgroundColor: '#00f0ff',
      boxShadow: '0 0 15px rgba(0, 240, 255, 0.8)',
      mixBlendMode: 'difference',
    },
    pointer: {
      x: mousePos.x - 24,
      y: mousePos.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(0, 240, 255, 0.15)',
      borderColor: '#00f0ff',
      borderWidth: 1.5,
    },
    project: {
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      width: 80,
      height: 80,
      backgroundColor: 'rgba(0, 240, 255, 0.9)',
      color: '#000000',
    },
    drag: {
      x: mousePos.x - 30,
      y: mousePos.y - 30,
      width: 60,
      height: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: '#ffffff',
      borderWidth: 1,
    }
  };

  return (
    <>
      {/* Main Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase text-black"
        animate={cursorState in variants ? cursorState : 'default'}
        variants={variants}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.1,
        }}
      >
        {cursorText}
      </motion.div>

      {/* Trailing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
}
