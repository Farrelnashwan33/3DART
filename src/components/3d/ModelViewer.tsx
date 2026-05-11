"use client";

import { MeshDistortMaterial, MeshWobbleMaterial, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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

  useFrame((state) => {
    if (!meshRef.current) return;
    if (isGenerating) {
      meshRef.current.rotation.y += 0.1;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 10) * 0.1);
    } else {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  // Render different primitives based on "style"
  const getStyleParams = () => {
    switch (style) {
      case "Cyberpunk":
        return { color: "#00E5FF", metalness: 0.8, roughness: 0.1, distort: 0.4 };
      case "Anime 3D":
        return { color: "#FF69B4", metalness: 0.2, roughness: 0.5, distort: 0.2 };
      case "Pixar style":
        return { color: "#FFA500", metalness: 0.1, roughness: 0.8, distort: 0.1 };
      case "Fantasy":
        return { color: "#A855F7", metalness: 0.5, roughness: 0.2, distort: 0.6 };
      case "Sci-fi":
        return { color: "#F8FAFC", metalness: 0.9, roughness: 0.05, distort: 0.3 };
      default:
        return { color: "#6C63FF", metalness: 0.5, roughness: 0.5, distort: 0.3 };
    }
  };

  const params = getStyleParams();

  return (
    <group>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
          <MeshDistortMaterial
            color={params.color}
            speed={isGenerating ? 10 : 2}
            distort={isGenerating ? 0.8 : params.distort}
            metalness={params.metalness}
            roughness={params.roughness}
            emissive={params.color}
            emissiveIntensity={isGenerating ? 2 : 0.5}
          />
        </mesh>
      </Float>
      
      {/* Decorative inner core */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshWobbleMaterial
          color="#ffffff"
          speed={3}
          factor={0.4}
          emissive="#ffffff"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}
