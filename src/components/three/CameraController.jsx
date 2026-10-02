import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController({ scrollProgress = 0, mousePos }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // Determine target camera coordinates based on scroll progress (0 to 1)
    if (scrollProgress < 0.2) {
      // Hero section
      targetPos.current.set(
        mousePos.normalizedX * 0.5,
        mousePos.normalizedY * 0.5,
        7.5
      );
    } else if (scrollProgress < 0.4) {
      // About section - slight tilt
      targetPos.current.set(
        1 + mousePos.normalizedX * 0.3,
        -0.5 + mousePos.normalizedY * 0.3,
        7.0
      );
    } else if (scrollProgress < 0.6) {
      // Services section - dynamic zoom
      targetPos.current.set(
        -1 + mousePos.normalizedX * 0.4,
        0.5 + mousePos.normalizedY * 0.4,
        6.2
      );
    } else if (scrollProgress < 0.8) {
      // Work section - wide cinematic angle
      targetPos.current.set(
        mousePos.normalizedX * 0.6,
        -1.2,
        5.8
      );
    } else {
      // Contact section - calm distance
      targetPos.current.set(0, 0, 8.5);
    }

    // Smooth lerp camera position
    camera.position.lerp(targetPos.current, 0.04);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
