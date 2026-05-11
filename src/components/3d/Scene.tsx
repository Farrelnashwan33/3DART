"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stars, Float, PerspectiveCamera } from "@react-three/drei";

export default function Scene({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0F172A]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Suspense fallback={null}>
          {/* Cinematic Lighting */}
          <ambientLight intensity={0.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
            castShadow
            color="#00E5FF"
          />
          <pointLight position={[-10, -10, -10]} color="#A855F7" intensity={1} />
          <pointLight position={[0, 5, 0]} color="#6C63FF" intensity={0.8} />

          {/* Background Elements */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            {children}
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2.5} 
            maxPolarAngle={Math.PI / 1.5} 
          />
        </Suspense>
      </Canvas>
      
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
