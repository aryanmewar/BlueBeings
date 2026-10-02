import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 600, scrollProgress = 0, isMobile = false }) {
  const pointsRef = useRef();
  const adjustedCount = isMobile ? 120 : count;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(adjustedCount * 3);
    const col = new Float32Array(adjustedCount * 3);

    const cyan = new THREE.Color('#00f0ff');
    const blue = new THREE.Color('#3b82f6');
    const indigo = new THREE.Color('#6366f1');

    for (let i = 0; i < adjustedCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * (isMobile ? 16 : 24);
      pos[i * 3 + 1] = (Math.random() - 0.5) * (isMobile ? 16 : 24);
      pos[i * 3 + 2] = (Math.random() - 0.5) * (isMobile ? 12 : 20);

      const mixRatio = Math.random();
      const pointColor = mixRatio > 0.6 ? cyan : mixRatio > 0.3 ? blue : indigo;

      col[i * 3] = pointColor.r;
      col[i * 3 + 1] = pointColor.g;
      col[i * 3 + 2] = pointColor.b;
    }

    return [pos, col];
  }, [adjustedCount, isMobile]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * (isMobile ? 0.015 : 0.03);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.08 : 0.06}
        vertexColors
        transparent
        opacity={isMobile ? 0.6 : 0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
