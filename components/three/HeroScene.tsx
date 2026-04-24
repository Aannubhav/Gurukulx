"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import Particles from "./Particles";

function PulsingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.08;
      meshRef.current.scale.setScalar(scale);
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.8 + Math.sin(t * 1.5) * 0.4;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(t * 1.5) * 0.8;
    }
  });

  return (
    <group>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#FF6B00"
          emissive="#FF8C21"
          emissiveIntensity={1.0}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      {/* Inner glow layer */}
      <mesh scale={1.3}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      <pointLight ref={lightRef} color="#FF8C21" intensity={2.5} distance={6} />
    </group>
  );
}

function DeviceLaptop({ angle, radius }: { angle: number; radius: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const currentAngle = angle + t * 0.25;
    groupRef.current.position.x = Math.cos(currentAngle) * radius;
    groupRef.current.position.z = Math.sin(currentAngle) * radius;
    groupRef.current.position.y = Math.sin(t * 0.5 + angle) * 0.15;
    groupRef.current.rotation.y = -currentAngle + Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      {/* Laptop base */}
      <RoundedBox args={[1.4, 0.08, 0.9]} radius={0.04} position={[0, -0.06, 0]}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      {/* Screen */}
      <group position={[0, 0.5, -0.3]} rotation={[-0.15, 0, 0]}>
        <RoundedBox args={[1.3, 0.85, 0.05]} radius={0.04}>
          <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        {/* Screen glow */}
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.1, 0.7]} />
          <meshStandardMaterial
            color="#FF8C21"
            emissive="#FF8C21"
            emissiveIntensity={1.2}
            transparent
            opacity={0.9}
          />
        </mesh>
        <pointLight color="#FF8C21" intensity={1.5} distance={3} position={[0, 0, 0.5]} />
      </group>
    </group>
  );
}

function DevicePhone({ angle, radius }: { angle: number; radius: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const currentAngle = angle + t * 0.25;
    groupRef.current.position.x = Math.cos(currentAngle) * radius;
    groupRef.current.position.z = Math.sin(currentAngle) * radius;
    groupRef.current.position.y = Math.sin(t * 0.5 + angle) * 0.15;
    groupRef.current.rotation.y = -currentAngle + Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[0.45, 0.9, 0.07]} radius={0.06}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.85} roughness={0.15} />
      </RoundedBox>
      {/* Screen */}
      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[0.35, 0.72]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={1.4}
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight color="#FFB366" intensity={1.2} distance={2.5} position={[0, 0, 0.5]} />
    </group>
  );
}

function DeviceTablet({ angle, radius }: { angle: number; radius: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const currentAngle = angle + t * 0.25;
    groupRef.current.position.x = Math.cos(currentAngle) * radius;
    groupRef.current.position.z = Math.sin(currentAngle) * radius;
    groupRef.current.position.y = Math.sin(t * 0.5 + angle) * 0.15;
    groupRef.current.rotation.y = -currentAngle + Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[0.75, 1.0, 0.065]} radius={0.05}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.82} roughness={0.18} />
      </RoundedBox>
      <mesh position={[0, 0, 0.037]}>
        <planeGeometry args={[0.62, 0.84]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={1.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight color="#FF8C21" intensity={1.3} distance={2.5} position={[0, 0, 0.4]} />
    </group>
  );
}

function WireframeGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.12 + Math.sin(t * 0.8) * 0.04;
  });

  const gridHelper = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 20, 20);
    return geo;
  }, []);

  return (
    <mesh ref={ref} geometry={gridHelper} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <meshBasicMaterial
        color="#FF8C21"
        transparent
        opacity={0.12}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
}

export default function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;
    targetRotX.current += (-mouseY * 0.3 - targetRotX.current) * 0.05;
    targetRotY.current += (mouseX * 0.5 - targetRotY.current) * 0.05;
    groupRef.current.rotation.x = targetRotX.current;
    groupRef.current.rotation.y = targetRotY.current;
  });

  return (
    <>
      {/* Lights */}
      <ambientLight color="#1a1008" intensity={0.15} />
      <pointLight color="#FF8C21" intensity={2.5} position={[4, 3, 2]} />
      <pointLight color="#FFB366" intensity={0.8} position={[-4, -2, 3]} />
      <spotLight
        color="#FF8C21"
        intensity={3}
        position={[0, 6, 0]}
        angle={0.4}
        penumbra={0.8}
        castShadow
      />

      <group ref={groupRef}>
        {/* Central core */}
        <PulsingCore />

        {/* Orbiting devices */}
        <DeviceLaptop angle={0} radius={2.2} />
        <DevicePhone angle={(Math.PI * 2) / 3} radius={2.0} />
        <DeviceTablet angle={(Math.PI * 4) / 3} radius={2.1} />

        {/* Particles */}
        <Particles count={80} spread={6} size={0.02} color="#FF8C21" speed={0.4} />
        <Particles count={30} spread={4} size={0.035} color="#FFB366" speed={0.25} />
      </group>

      {/* Wireframe ground */}
      <WireframeGrid />
    </>
  );
}
