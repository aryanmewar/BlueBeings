import React, { useState, useEffect, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import InteractiveBlob from './InteractiveBlob';
import ParticleField from './ParticleField';
import FloatingObjects from './FloatingObjects';
import CameraController from './CameraController';
import ThreeLoader from './ThreeLoader';

// WebGL Error Boundary class
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Error caught, using CSS ambient fallback:', error, errorInfo);
    if (this.props.onError) this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function ThreeScene({ scrollProgress = 0, mousePos = { normalizedX: 0, normalizedY: 0 }, isMobile = false }) {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <CSSFallbackBackground scrollProgress={scrollProgress} />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
      <WebGLErrorBoundary
        fallback={<CSSFallbackBackground scrollProgress={scrollProgress} />}
        onError={() => setWebglSupported(false)}
      >
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: isMobile ? 50 : 45, near: 0.1, far: 50 }}
          dpr={isMobile ? 1 : [1, 1.5]}
          gl={{
            antialias: !isMobile, // Disable MSAA on mobile for massive GPU performance gain
            powerPreference: isMobile ? 'low-power' : 'high-performance',
            alpha: true,
            depth: true,
            stencil: false,
          }}
          style={{ background: 'transparent' }}
        >
          <ThreeLoader />

          {/* Lighting */}
          <ambientLight intensity={isMobile ? 0.8 : 0.5} />
          <directionalLight position={[5, 8, 5]} intensity={isMobile ? 1.2 : 1.5} color="#ffffff" />
          <pointLight position={[-4, -3, -2]} intensity={1.5} color="#00f0ff" distance={12} />
          {!isMobile && <pointLight position={[5, 4, -3]} intensity={2} color="#3b82f6" distance={12} />}

          {/* Main 3D Mesh */}
          <InteractiveBlob
            mousePos={mousePos}
            scrollProgress={scrollProgress}
            isMobile={isMobile}
          />

          {/* Particle Field */}
          <ParticleField
            scrollProgress={scrollProgress}
            isMobile={isMobile}
          />

          {/* Floating Objects (Only rendered on Desktop for 60fps mobile) */}
          {!isMobile && (
            <FloatingObjects
              scrollProgress={scrollProgress}
              isMobile={isMobile}
            />
          )}

          {/* Camera Controller */}
          <CameraController
            scrollProgress={scrollProgress}
            mousePos={mousePos}
            isMobile={isMobile}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}

// Lightweight CSS Ambient Fallback for low-end / fallback
function CSSFallbackBackground({ scrollProgress }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tr from-cyan-600/25 via-blue-600/15 to-indigo-900/10 blur-[100px] sm:blur-[140px]"
        style={{
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.4})`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.12),rgba(255,255,255,0))]" />
    </div>
  );
}
