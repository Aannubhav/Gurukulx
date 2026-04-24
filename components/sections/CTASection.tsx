"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Particles from "@/components/three/Particles";
import { useIsMobile } from "@/hooks/useMediaQuery";

function TorusScene() {
  const torusRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.z = t * 0.25;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(t * 1.5) * 0.8;
    }
  });

  return (
    <>
      <ambientLight color="#1a0f05" intensity={0.1} />
      <pointLight color="#FF8C21" intensity={2} position={[3, 3, 2]} />
      <pointLight color="#FFB366" intensity={0.8} position={[-3, -2, 1]} />
      <pointLight ref={lightRef} color="#FF8C21" intensity={2.5} position={[0, 0, 0]} />

      {/* Outer torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[2.2, 0.18, 24, 80]} />
        <meshStandardMaterial
          color="#FF8C21"
          emissive="#FF8C21"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Inner torus — perpendicular */}
      <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 60]} />
        <meshStandardMaterial
          color="#FFB366"
          emissive="#FFB366"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#FF6B00"
          emissive="#FF8C21"
          emissiveIntensity={2.0}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      <Particles count={80} spread={8} size={0.02} color="#FF8C21" speed={0.3} />
    </>
  );
}

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,140,33,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,12,0.3) 0%, rgba(255,140,33,0.04) 50%, rgba(8,8,12,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* 3D Background */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
          <Canvas
            camera={{ position: [0, 0, 7], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, alpha: true }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <TorusScene />
              <EffectComposer>
                <Bloom
                  intensity={2.5}
                  luminanceThreshold={0.4}
                  luminanceSmoothing={0.04}
                  mipmapBlur
                />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF8C21] mb-5">
              Launch in Weeks
            </p>

            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] mb-6">
              Your EdTech Platform.{" "}
              <span className="text-gradient">Ready to Go Live.</span>
            </h2>

            <p className="text-lg text-[#9A8E7F] leading-relaxed mb-10 max-w-2xl mx-auto">
              Join 200+ institutes and coaching centres already teaching, scaling, and earning under their own brand — powered by GurukulamX.
            </p>

            {/* Email form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
              >
                <div className="flex-1 relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A8E7F]"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@institute.com"
                    required
                    className="w-full bg-[rgba(255,140,33,0.06)] border border-[rgba(255,140,33,0.15)] rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#F5F0E8] placeholder-[#9A8E7F]/60 focus:outline-none focus:border-[rgba(255,140,33,0.45)] focus:bg-[rgba(255,140,33,0.09)] transition-all"
                  />
                </div>
                <Button type="submit" size="md" glow>
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-[#FF8C21] font-semibold mb-8 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#FF8C21] flex items-center justify-center">
                  <span className="text-[#08080C] text-xs">✓</span>
                </div>
                We&apos;ll reach out to {email} shortly!
              </motion.div>
            )}

            {/* Alternative CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" glow>
                Book a Free Demo
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg">
                See Pricing Plans
              </Button>
            </div>

            <p className="text-xs text-[#9A8E7F]/60 mt-6">
              No upfront commitment · Launch in 3 weeks · Full white-label branding
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
