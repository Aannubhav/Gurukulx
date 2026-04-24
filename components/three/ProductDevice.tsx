"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface ProductDeviceProps {
  type: "web" | "android" | "ios";
}

function WebDevice() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
    if (screenRef.current) {
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1.0 + Math.sin(t * 1.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      {/* Monitor stand */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.6, 12]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.4, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.06, 24]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor frame */}
      <RoundedBox args={[2.8, 1.8, 0.1]} radius={0.06} position={[0, 0, 0]}>
        <meshStandardMaterial color="#111" metalness={0.75} roughness={0.25} />
      </RoundedBox>

      {/* Screen display */}
      <mesh ref={screenRef} position={[0, 0, 0.07]}>
        <planeGeometry args={[2.5, 1.52]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={1.0}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Screen grid lines */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[2.5, 1.52]} />
        <meshBasicMaterial
          color="#FF6B00"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Light rays from screen */}
      <pointLight color="#FF8C21" intensity={3} distance={5} position={[0, 0, 1]} />
      <pointLight color="#FFB366" intensity={1.5} distance={4} position={[0, 0, -0.5]} />
    </group>
  );
}

function AndroidDevice() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.25;
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    if (screenRef.current) {
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1.2 + Math.sin(t * 1.4) * 0.35;
    }
  });

  return (
    <group ref={groupRef} scale={1.4}>
      {/* Phone body */}
      <RoundedBox args={[0.85, 1.8, 0.1]} radius={0.1}>
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.05, 0.055]}>
        <planeGeometry args={[0.7, 1.45]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={1.2}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Camera notch */}
      <mesh position={[0, 0.82, 0.06]}>
        <circleGeometry args={[0.035, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Home indicator */}
      <mesh position={[0, -0.76, 0.056]}>
        <planeGeometry args={[0.2, 0.02]} />
        <meshStandardMaterial color="#FF8C21" emissive="#FF8C21" emissiveIntensity={1} transparent opacity={0.8} />
      </mesh>

      {/* Orange rim light effect */}
      <RoundedBox args={[0.86, 1.81, 0.08]} radius={0.1}>
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </RoundedBox>

      {/* Floating particle sparks */}
      <pointLight color="#FF8C21" intensity={2.5} distance={4} position={[0, 0, 0.8]} />
      <pointLight color="#FFB366" intensity={1} distance={3} position={[-1, 0.5, 0]} />
    </group>
  );
}

function IOSDevice() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.38) * 0.22;
    groupRef.current.rotation.x = Math.sin(t * 0.28) * 0.06;
    groupRef.current.position.y = Math.sin(t * 0.55) * 0.13;
    if (screenRef.current) {
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1.1 + Math.sin(t * 1.1) * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={1.35}>
      {/* iPhone body — glass-like */}
      <RoundedBox args={[0.8, 1.75, 0.09]} radius={0.12}>
        <meshPhysicalMaterial
          color="#0d0d0d"
          metalness={0.95}
          roughness={0.05}
          reflectivity={1}
          transmission={0.05}
        />
      </RoundedBox>

      {/* Dynamic island */}
      <RoundedBox args={[0.18, 0.04, 0.01]} radius={0.02} position={[0, 0.8, 0.05]}>
        <meshStandardMaterial color="#000" />
      </RoundedBox>

      {/* Screen */}
      <mesh ref={screenRef} position={[0, -0.02, 0.05]}>
        <planeGeometry args={[0.66, 1.42]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={1.1}
          transparent
          opacity={0.93}
        />
      </mesh>

      {/* Home bar */}
      <mesh position={[0, -0.72, 0.051]}>
        <planeGeometry args={[0.22, 0.025]} />
        <meshStandardMaterial color="#FF8C21" emissive="#FF8C21" emissiveIntensity={1.2} transparent opacity={0.7} />
      </mesh>

      {/* Orange internal glow */}
      <RoundedBox args={[0.78, 1.73, 0.07]} radius={0.12}>
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={0.1}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </RoundedBox>

      {/* Reflection plane below */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <planeGeometry args={[1.2, 0.6]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={0.08}
          transparent
          opacity={0.12}
        />
      </mesh>

      <pointLight color="#FF8C21" intensity={2.8} distance={4} position={[0, 0, 0.8]} />
      <pointLight color="#FFB366" intensity={1.2} distance={3} position={[1, -0.5, 0]} />
    </group>
  );
}

export default function ProductDevice({ type }: ProductDeviceProps) {
  return (
    <>
      <ambientLight color="#1a0f05" intensity={0.12} />
      <pointLight color="#FF8C21" intensity={2} position={[3, 4, 3]} />
      <pointLight color="#FFB366" intensity={0.8} position={[-3, -2, 2]} />

      {type === "web" && <WebDevice />}
      {type === "android" && <AndroidDevice />}
      {type === "ios" && <IOSDevice />}
    </>
  );
}
