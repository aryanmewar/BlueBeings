import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingObjects({ scrollProgress = 0, isMobile = false }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Rotate entire constellation
    groupRef.current.rotation.y = time * 0.05 + scrollProgress * Math.PI;
    groupRef.current.position.y = Math.sin(time * 0.3) * 0.2;
  });

  if (isMobile) return null; // Reduce complexity on mobile

  return (
    <group ref={groupRef}>
      {/* Object 1: Glass Torus Ring (Top Right) */}
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[5.5, 3, -2]} rotation={[0.4, 0.2, 0.8]}>
          <torusGeometry args={[1.2, 0.25, 32, 64]} />
          <meshPhysicalMaterial
            color="#3b82f6"
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            transmission={0.5}
            ior={1.5}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Object 2: Icosahedron Wireframe (Bottom Left) */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-5, -3, -1]} rotation={[0.5, 0.5, 0]}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshBasicMaterial
            color="#00f0ff"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      {/* Object 3: Glowing Crystal Octahedron (Far Right) */}
      <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[6, -4, -4]}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.2}
            metalness={0.8}
            emissive="#1e1b4b"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Object 4: Orbit Ring (Center Backdrop) */}
      <mesh position={[0, 0, -6]} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[6.5, 6.55, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
