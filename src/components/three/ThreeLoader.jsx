import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export default function ThreeLoader({ onLoaded }) {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (!active || progress >= 100) {
      if (onLoaded) {
        onLoaded();
      }
    }
  }, [progress, active, onLoaded]);

  return null;
}
