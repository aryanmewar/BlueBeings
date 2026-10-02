import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 95 ? 95 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#020408] text-slate-100 flex flex-col justify-between p-8 sm:p-12 select-none"
        >
          {/* Top Brand Marker */}
          <div className="flex justify-between items-center font-mono text-xs text-slate-400 tracking-widest uppercase">
            <span>BLUE BEINGS STUDIO</span>
            <span>CREATIVE TECH 2026</span>
          </div>

          {/* Center Brand Title */}
          <div className="my-auto text-center space-y-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block relative"
            >
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase font-heading bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                BLUE BEINGS
              </h1>
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-cyan-400 uppercase mt-2">
                WHERE STORIES COME ALIVE
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-md mx-auto space-y-3">
            <div className="flex justify-between font-mono text-xs text-slate-400">
              <span className="text-cyan-400">INITIALIZING 3D ENGINE</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
