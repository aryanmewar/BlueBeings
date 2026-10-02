import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveBlob({ mousePos, scrollProgress = 0, isMobile = false }) {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Mouse movement lerp (disabled or subtle on mobile)
    const targetX = isMobile ? 0 : mousePos.normalizedX * 1.2;
    const targetY = isMobile ? 0 : mousePos.normalizedY * 1.2;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.04);
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY - scrollProgress * (isMobile ? 2 : 4),
      0.04
    );

    // Rotation
    meshRef.current.rotation.x = time * (isMobile ? 0.1 : 0.15) + scrollProgress * Math.PI;
    meshRef.current.rotation.y = time * (isMobile ? 0.12 : 0.2);

    // Scale calculation
    let targetScale = isMobile ? 0.85 : 1.2;
    if (scrollProgress > 0.85) {
      targetScale *= 0.8;
    }

    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.04);

    // Modulate distortion speed
    if (materialRef.current) {
      materialRef.current.distort = isMobile ? 0.2 : 0.35;
      materialRef.current.speed = isMobile ? 1.0 : 1.8;
    }
  });

  return (
    <Float
      speed={isMobile ? 1 : 2}
      rotationIntensity={isMobile ? 0.3 : 0.6}
      floatIntensity={isMobile ? 0.4 : 0.8}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[isMobile ? 1.4 : 2.2, isMobile ? 24 : 48]} />
        {isMobile ? (
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#002b4d"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        ) : (
          <MeshDistortMaterial
            ref={materialRef}
            color="#00f0ff"
            emissive="#003865"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.85}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.4}
            thickness={1.2}
            distort={0.35}
            speed={1.8}
          />
        )}
      </mesh>
    </Float>
  );
}
