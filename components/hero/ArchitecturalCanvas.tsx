'use client'

import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import ArchitecturalModel from './ArchitecturalModel'

export default function ArchitecturalCanvas() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)

    // Verify WebGL availability
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setHasWebGL(false)
    } catch {
      setHasWebGL(false)
    }

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#1A1A1A] via-[#2A2A2A] to-[#4A4A4A] text-white/70 text-xs tracking-widest uppercase">
        <span>Architectural Spatial Model</span>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [5.8, 4.2, 5.8], fov: 38 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* STUDIO LIGHTING SETUP */}
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-6}
          shadow-camera-right={6}
          shadow-camera-top={6}
          shadow-camera-bottom={-6}
          shadow-bias={-0.0002}
        />
        <directionalLight position={[-8, 6, -8]} intensity={0.4} color="#C4D7E5" />
        <pointLight position={[0, 4, 0]} intensity={0.3} color="#FFF5E5" />

        {/* 3D ARCHITECTURAL MODEL */}
        <ArchitecturalModel reducedMotion={reducedMotion} />

        {/* CONTACT SHADOW ON TURNTABLE FLOOR */}
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.45}
          scale={9}
          blur={2.2}
          far={3.5}
          resolution={512}
          color="#000000"
        />

        {/* INTERACTIVE CONTROLS (Gentle constraints so model remains framed) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          rotateSpeed={0.6}
        />
      </Canvas>

      {/* SUBTLE TURNTABLE HINT BADGE */}
      <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] uppercase tracking-[0.25em] text-[#9B9B9B] flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-1.5 border border-[#E5E5E5] rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] animate-pulse" />
        <span>Interactive 3D Massing</span>
      </div>
    </div>
  )
}
