'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ModelProps {
  reducedMotion?: boolean
}

export default function ArchitecturalModel({ reducedMotion = false }: ModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const targetRotationY = useRef(0)
  const targetRotationX = useRef(0)

  useFrame((state, delta) => {
    if (!groupRef.current) return

    if (!reducedMotion) {
      // Ambient slow turntable rotation
      targetRotationY.current += delta * 0.12

      // Subtle mouse parallax influence
      const mouseX = state.pointer.x * 0.35
      const mouseY = -state.pointer.y * 0.2

      // Smooth damping interpolation (lerp)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY.current + mouseX,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY * 0.5,
        0.05
      )
    } else {
      // Static fixed elegant isometric angle for reduced motion
      groupRef.current.rotation.y = 0.55
      groupRef.current.rotation.x = 0.15
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* BASE PLINTH / PODIUM */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[5.2, 0.18, 4.4]} />
        <meshStandardMaterial color="#E8E8E8" roughness={0.9} metalness={0.05} />
      </mesh>

      {/* LOWER PODIUM STEP */}
      <mesh position={[0.4, -0.1, 0.2]} receiveShadow>
        <boxGeometry args={[5.6, 0.1, 4.8]} />
        <meshStandardMaterial color="#D6D6D6" roughness={0.95} metalness={0.02} />
      </mesh>

      {/* SUNKEN REFLECTION POOL */}
      <mesh position={[-1.2, 0.1, 0.9]} receiveShadow>
        <boxGeometry args={[1.8, 0.04, 1.6]} />
        <meshStandardMaterial color="#1A262C" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* GROUND LEVEL MAIN LIVING VOLUME (Off-white textured mass) */}
      <mesh position={[-0.4, 0.7, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.2, 2.4]} />
        <meshStandardMaterial color="#F4F4F4" roughness={0.85} metalness={0.05} />
      </mesh>

      {/* UPPER CANTILEVERED WING (Primary Charcoal Brand Architectural Mass) */}
      <mesh position={[0.6, 1.8, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 1.1, 2.6]} />
        <meshStandardMaterial color="#1E1E1E" roughness={0.7} metalness={0.15} />
      </mesh>

      {/* INTERLOCKING HORIZONTAL SLAB / TERRACE BALCONY */}
      <mesh position={[0.7, 1.22, 0.25]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.08, 3.0]} />
        <meshStandardMaterial color="#383838" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* FLOATING ROOF CANOPY SLAB */}
      <mesh position={[0.3, 2.42, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.06, 3.2]} />
        <meshStandardMaterial color="#F0F0F0" roughness={0.8} metalness={0.05} />
      </mesh>

      {/* VERTICAL SOLAR SHADING LOUVERS / BRISE-SOLEIL (Charcoal Grey Accent) */}
      {[-0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2].map((xOffset, i) => (
        <mesh key={`louver-${i}`} position={[xOffset + 0.3, 1.8, 1.54]} castShadow>
          <boxGeometry args={[0.04, 1.05, 0.15]} />
          <meshStandardMaterial color="#2B2B2B" roughness={0.5} metalness={0.3} />
        </mesh>
      ))}

      {/* SLENDER STRUCTURAL COLUMNS (Matte Black Steel) */}
      <mesh position={[-1.7, 0.6, 1.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.2, 16]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[-1.7, 0.6, -0.8]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.2, 16]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[2.0, 1.2, 1.4]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 2.4, 16]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* SMOKED ARCHITECTURAL GLASS FACADE */}
      <mesh position={[-0.4, 0.68, 0.81]}>
        <boxGeometry args={[2.2, 1.0, 0.03]} />
        <meshStandardMaterial
          color="#333D45"
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* WARM INTERNAL ACCENT / BRASS REFLECTOR */}
      <mesh position={[-0.4, 0.65, 0.2]}>
        <boxGeometry args={[1.2, 0.04, 0.8]} />
        <meshStandardMaterial color="#C5A880" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* REAR SECONDARY VOLUME */}
      <mesh position={[-1.2, 0.9, -1.2]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.6, 1.4]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.8} metalness={0.1} />
      </mesh>
    </group>
  )
}
