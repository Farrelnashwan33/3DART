"use client";

import { Float, Center, Stage } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

export type ModelStyle = 
  | "Anime 3D" 
  | "Pixar style" 
  | "Cyberpunk" 
  | "Realistic" 
  | "Stylized cartoon" 
  | "Low poly" 
  | "Fantasy" 
  | "Sci-fi" 
  | "Cute chibi" 
  | "Islamic art style";

interface ModelViewerProps {
  style?: ModelStyle;
  isGenerating?: boolean;
}

export default function ModelViewer({ style = "Cyberpunk", isGenerating = false }: ModelViewerProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  // @ts-ignore
  const geometry = useLoader(STLLoader, "/models/naruto.stl");

  useFrame((state) => {
    if (!meshRef.current) return;
    // Rotate around the local Z axis (which points up after the X rotation)
    // This creates a turntable-like horizontal rotation
    meshRef.current.rotation.z += isGenerating ? 0.05 : 0.01;
  });

  return (
    <group>
      <Stage 
        environment="city" 
        intensity={0.5} 
        shadows={false} 
        adjustCamera={2}
      >
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Center>
            <mesh 
              ref={meshRef} 
              geometry={geometry} 
              castShadow 
              receiveShadow 
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial
                color="#6366f1"
                metalness={0.8}
                roughness={0.2}
                emissive="#6366f1"
                emissiveIntensity={0.1}
              />
            </mesh>
          </Center>
        </Float>
      </Stage>
    </group>
  );
}
