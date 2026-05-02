"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
  speed?: number;
}

export default function Particles({
  count = 120,
  spread = 8,
  size = 0.025,
  color = "#FF8547",
  speed = 0.3,
}: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);

  const { geometry, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return { geometry: geo, phases };
  }, [count, spread]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const phase = phases[i];
      pos[i * 3 + 1] += Math.sin(t * speed + phase) * 0.003;
      if (pos[i * 3 + 1] > spread / 2) pos[i * 3 + 1] = -spread / 2;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
