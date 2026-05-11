"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Float, PerspectiveCamera, Html } from "@react-three/drei";

export default function Scene({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 -z-10 bg-white grid-bg">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-400 font-bold animate-pulse">Loading 3D Model...</p>
            </div>
          </Html>
        }>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {children}
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
          />
        </Suspense>
      </Canvas>
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-accent-cyan/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-accent-purple/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
