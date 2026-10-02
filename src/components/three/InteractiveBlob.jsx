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

    // Smooth interpolation to mouse cursor
    const targetX = mousePos.normalizedX * 1.5;
    const targetY = mousePos.normalizedY * 1.5;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY - scrollProgress * 4, // Moves vertically based on scroll
      0.05
    );

    // Dynamic rotation evolving with scroll
    meshRef.current.rotation.x = time * 0.15 + scrollProgress * Math.PI * 2;
    meshRef.current.rotation.y = time * 0.2 + scrollProgress * Math.PI;

    // Scale dynamics across sections
    // Hero: 1.0 -> Work section: 1.4 -> Contact section: 0.8
    let targetScale = 1.2;
    if (scrollProgress > 0.45 && scrollProgress < 0.7) {
      targetScale = 1.6; // Work section zoom
    } else if (scrollProgress > 0.85) {
      targetScale = 0.9; // Contact calm state
    }
    if (isMobile) targetScale *= 0.75;

    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

    // Distortion modulation based on mouse & scroll
    if (materialRef.current) {
      const distortSpeed = 1.5 + scrollProgress * 3;
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        0.35 + Math.abs(mousePos.normalizedX) * 0.25 + (scrollProgress > 0.6 ? 0.3 : 0),
        0.05
      );
      materialRef.current.speed = distortSpeed;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.6}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[isMobile ? 1.8 : 2.4, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#00f0ff"
          emissive="#003865"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.4} // Glass-like liquid effect
          thickness={1.2}
          distort={0.4}
          speed={2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}
