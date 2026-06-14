"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const ARABIC_LETTERS = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];

function FloatingSymbols() {
  const group = useRef<THREE.Group>(null);
  
  const symbols = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      letter: ARABIC_LETTERS[Math.floor(Math.random() * ARABIC_LETTERS.length)],
      scale: Math.random() * 0.4 + 0.3,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {symbols.map((item, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={item.position}
            rotation={item.rotation}
            fontSize={item.scale}
            color="#0D9488"
            fillOpacity={0.2}
            font="/fonts/Cairo-Regular.ttf"
          >
            {item.letter}
          </Text>
        </Float>
      ))}
    </group>
  );
}

function Particles() {
  const count = 500;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40;
      p[i * 3 + 1] = (Math.random() - 0.5) * 40;
      p[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return p;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#0D9488"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-soft overflow-hidden">
      {/* Light elegant overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-soft/80 to-soft pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-soft pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0D9488" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        {/* Core 3D Elements */}
        <FloatingSymbols />
        <Particles />
        
      </Canvas>
    </div>
  );
}
