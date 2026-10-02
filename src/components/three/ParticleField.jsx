import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 800, scrollProgress = 0, isMobile = false }) {
  const pointsRef = useRef();
  const adjustedCount = isMobile ? Math.floor(count / 2) : count;

  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(adjustedCount * 3);
    const col = new Float32Array(adjustedCount * 3);
    const scl = new Float32Array(adjustedCount);

    const cyan = new THREE.Color('#00f0ff');
    const blue = new THREE.Color('#3b82f6');
    const indigo = new THREE.Color('#6366f1');

    for (let i = 0; i < adjustedCount; i++) {
      // Spread in 3D volume
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Color variation between cyan, blue, indigo
      const mixRatio = Math.random();
      const pointColor = mixRatio > 0.6 ? cyan : mixRatio > 0.3 ? blue : indigo;

      col[i * 3] = pointColor.r;
      col[i * 3 + 1] = pointColor.g;
      col[i * 3 + 2] = pointColor.b;

      scl[i] = Math.random() * 0.08 + 0.02;
    }

    return [pos, col, scl];
  }, [adjustedCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Slow ambient rotation
    pointsRef.current.rotation.y += delta * 0.03 * (1 + scrollProgress * 2);
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    // React to scroll progress by expanding particle radius
    const scaleFactor = 1 + scrollProgress * 0.5;
    pointsRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
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
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
