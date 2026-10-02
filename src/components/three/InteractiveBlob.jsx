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

    // Smooth movement
    const targetX = isMobile ? 0 : mousePos.normalizedX * 1.2;
    const targetY = isMobile ? 0 : mousePos.normalizedY * 1.2;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY - scrollProgress * (isMobile ? 2.5 : 4),
      0.05
    );

    // Rotation
    meshRef.current.rotation.x = time * 0.12 + scrollProgress * Math.PI;
    meshRef.current.rotation.y = time * 0.15;

    // Scale calculation
    let targetScale = isMobile ? 0.85 : 1.2;
    if (scrollProgress > 0.85) {
      targetScale *= 0.8;
    }

    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

    // Dynamic distortion
    if (materialRef.current) {
      materialRef.current.distort = isMobile ? 0.25 : 0.35;
      materialRef.current.speed = isMobile ? 1.2 : 1.8;
    }
  });

  return (
    <Float
      speed={isMobile ? 1.2 : 2}
      rotationIntensity={isMobile ? 0.4 : 0.6}
      floatIntensity={isMobile ? 0.5 : 0.8}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[isMobile ? 1.5 : 2.2, isMobile ? 28 : 36]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#00f0ff"
          emissive="#003865"
          emissiveIntensity={0.4}
          roughness={0.18}
          metalness={0.8}
          clearcoat={0.8}
          clearcoatRoughness={0.15}
          transmission={0.35}
          thickness={1.0}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}
