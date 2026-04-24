"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Particles from "./Particles";

interface ShowcaseObjectProps {
  position: [number, number, number];
  type: "web" | "android" | "ios";
  isSelected: boolean;
  onClick: () => void;
}

function ShowcaseObject({ position, type, isSelected, onClick }: ShowcaseObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const targetPos = useRef<THREE.Vector3>(new THREE.Vector3(...position));
  const centerPos = new THREE.Vector3(0, 0, 0);

  useFrame(({ clock }) => {
    if (!groupRef.current || !glowRef.current) return;
    const t = clock.getElapsedTime();

    const targetX = isSelected ? 0 : position[0];
    const targetY = isSelected ? 0 : position[1];
    const targetZ = isSelected ? 1 : position[2];

    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.06;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.06;
    groupRef.current.position.z += (targetZ - groupRef.current.position.z) * 0.06;

    if (!isSelected) {
      groupRef.current.rotation.y += 0.008;
      groupRef.current.position.y += Math.sin(t * 0.7 + position[0]) * 0.003;
    } else {
      groupRef.current.rotation.y += 0.015;
    }

    const targetScale = isSelected ? 1.5 : 1;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

    const intensity = isSelected ? 1.4 + Math.sin(t * 2) * 0.3 : 0.6 + Math.sin(t * 1.5) * 0.2;
    (glowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
  });

  const getGeometry = () => {
    switch (type) {
      case "web":
        return (
          <group>
            <RoundedBox args={[1.8, 1.2, 0.12]} radius={0.06}>
              <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            <mesh ref={glowRef} position={[0, 0, 0.07]}>
              <planeGeometry args={[1.55, 0.97]} />
              <meshStandardMaterial
                color="#FF8C21"
                emissive="#FF8C21"
                emissiveIntensity={0.8}
                transparent opacity={0.92}
              />
            </mesh>
          </group>
        );
      case "android":
        return (
          <group>
            <RoundedBox args={[0.7, 1.4, 0.1]} radius={0.08}>
              <meshStandardMaterial color="#0d0d0d" metalness={0.9} roughness={0.1} />
            </RoundedBox>
            <mesh ref={glowRef} position={[0, 0.05, 0.055]}>
              <planeGeometry args={[0.55, 1.15]} />
              <meshStandardMaterial
                color="#FF8C21"
                emissive="#FF8C21"
                emissiveIntensity={1.0}
                transparent opacity={0.9}
              />
            </mesh>
          </group>
        );
      case "ios":
        return (
          <group>
            <RoundedBox args={[0.65, 1.35, 0.09]} radius={0.1}>
              <meshPhysicalMaterial color="#0a0a0a" metalness={0.95} roughness={0.05} reflectivity={1} />
            </RoundedBox>
            <mesh ref={glowRef} position={[0, 0, 0.05]}>
              <planeGeometry args={[0.52, 1.12]} />
              <meshStandardMaterial
                color="#FF8C21"
                emissive="#FF8C21"
                emissiveIntensity={0.9}
                transparent opacity={0.9}
              />
            </mesh>
          </group>
        );
    }
  };

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => document.body.style.cursor = "pointer"}
      onPointerOut={() => document.body.style.cursor = "auto"}
    >
      {getGeometry()}
      <pointLight
        color="#FF8C21"
        intensity={isSelected ? 3 : 1.5}
        distance={4}
        position={[0, 0, 0.8]}
      />
    </group>
  );
}

function CentralLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    lightRef.current.intensity = 1.5 + Math.sin(clock.getElapsedTime() * 1.2) * 0.5;
  });

  return (
    <pointLight
      ref={lightRef}
      color="#FF8C21"
      intensity={2}
      distance={8}
      position={[0, 0, 0]}
    />
  );
}

function OrangeGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.08 + Math.sin(clock.getElapsedTime() * 0.5) * 0.03;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[20, 20, 30, 30]} />
      <meshBasicMaterial color="#FF8C21" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

interface InteractiveShowcaseSceneProps {
  selected: number;
  onSelect: (i: number) => void;
}

const positions: [number, number, number][] = [
  [-2.5, 0, 0],
  [0, 0, 0],
  [2.5, 0, 0],
];

const types: ("web" | "android" | "ios")[] = ["web", "android", "ios"];

export default function InteractiveShowcaseScene({ selected, onSelect }: InteractiveShowcaseSceneProps) {
  return (
    <>
      <ambientLight color="#1a0f05" intensity={0.12} />
      <pointLight color="#FF8C21" intensity={1.5} position={[0, 5, 3]} />
      <pointLight color="#FFB366" intensity={0.6} position={[-5, -3, 2]} />
      <CentralLight />

      {positions.map((pos, i) => (
        <ShowcaseObject
          key={types[i]}
          position={pos}
          type={types[i]}
          isSelected={selected === i}
          onClick={() => onSelect(i)}
        />
      ))}

      <Particles count={100} spread={10} size={0.018} color="#FF8C21" speed={0.25} />
      <OrangeGrid />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        makeDefault
      />
    </>
  );
}
