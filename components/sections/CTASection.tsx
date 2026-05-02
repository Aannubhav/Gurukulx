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
      <ambientLight color="#fff5ee" intensity={0.3} />
      <pointLight color="#FF6B00" intensity={2} position={[3, 3, 2]} />
      <pointLight color="#FF8C21" intensity={0.8} position={[-3, -2, 1]} />
      <pointLight ref={lightRef} color="#FF6B00" intensity={2.5} position={[0, 0, 0]} />
      <mesh ref={torusRef}>
        <torusGeometry args={[2.2, 0.18, 24, 80]} />
        <meshStandardMaterial color="#FF6B00" emissive="#FF6B00" emissiveIntensity={0.6} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 60]} />
        <meshStandardMaterial color="#FF8C21" emissive="#FF8C21" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#FF5500" emissive="#FF6B00" emissiveIntensity={2.0} roughness={0.2} metalness={0.7} />
      </mesh>
      <Particles count={80} spread={8} size={0.02} color="#FF6B00" speed={0.3} />
    </>
  );
}

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#F0EBE3]">
      {/* Decorative gradient orbs — contained, won't overflow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)", maxWidth: "100vw" }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B00] mb-5">
              Launch in Weeks
            </p>

            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1209] leading-[1.1] mb-6">
              Your EdTech Platform.{" "}
              <span className="text-gradient">Ready to Go Live.</span>
            </h2>

            <p className="text-lg text-[#6B6058] leading-relaxed mb-10 max-w-2xl mx-auto">
              Join 200+ institutes and coaching centres already teaching, scaling, and earning under their own brand — powered by GurukulamX.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <div className="flex-1 relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6058]" aria-hidden="true" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@institute.com"
                    required
                    className="w-full bg-white border border-black/[0.1] rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#1A1209] placeholder-[#6B6058]/60 focus:outline-none focus:border-[rgba(255,107,0,0.5)] transition-all shadow-sm"
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
                className="flex items-center justify-center gap-3 text-[#FF6B00] font-semibold mb-8 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                We&apos;ll reach out to {email} shortly!
              </motion.div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" glow>
                Book a Free Demo
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg">
                See Pricing Plans
              </Button>
            </div>

            <p className="text-xs text-[#6B6058]/60 mt-6">
              No upfront commitment · Launch in 3 weeks · Full white-label branding
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
